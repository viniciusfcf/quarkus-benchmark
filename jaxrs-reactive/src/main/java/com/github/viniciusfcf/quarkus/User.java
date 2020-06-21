package com.github.viniciusfcf.quarkus;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.stream.StreamSupport;

import io.smallrye.mutiny.Multi;
import io.vertx.mutiny.pgclient.PgPool;
import io.vertx.mutiny.sqlclient.Row;
import io.vertx.mutiny.sqlclient.Tuple;

public class User {

    private Long id;

    private String firstname;

    private Integer age;

    private BigDecimal salary;

    private Long points;

	private Boolean verified;
	
	private LocalDateTime creation;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public BigDecimal getSalary() {
		return salary;
	}

	public void setSalary(BigDecimal salary) {
		this.salary = salary;
	}

	public Long getPoints() {
		return points;
	}

	public void setPoints(Long points) {
		this.points = points;
	}

	public Boolean getVerified() {
		return verified;
	}

	public void setVerified(Boolean verified) {
		this.verified = verified;
	}

	public LocalDateTime getCreation() {
		return creation;
	}

	public void setCreation(LocalDateTime creation) {
		this.creation = creation;
	}

	public static Multi<User> findAll(PgPool client, int pageIndex, Integer pageSize) {
		return client.preparedQuery("SELECT id, age, creation, firstname, id, points, salary, verified FROM public.\"user\" ORDER BY firstname ASC LIMIT $1 OFFSET $2").execute(Tuple.of(pageSize, pageIndex * pageSize))
            .onItem().produceMulti(set -> Multi.createFrom().items(() -> StreamSupport.stream(set.spliterator(), false)))
            .onItem().apply(User::from);
	}
	private static User from(Row row) {
		User user = new User();
		user.setId(row.getLong("id"));
		user.setAge(row.getInteger("age"));
		user.setCreation(row.getLocalDateTime("creation"));
		user.setFirstname(row.getString("firstname"));
		user.setId(row.getLong("id"));
		user.setPoints(row.getLong("points"));
		user.setSalary(row.getBigDecimal("salary"));
		user.setVerified(row.getBoolean("verified"));
		
		return user;
	}

}
