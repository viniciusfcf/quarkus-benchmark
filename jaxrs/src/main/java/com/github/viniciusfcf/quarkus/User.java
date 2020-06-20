package com.github.viniciusfcf.quarkus;

import java.math.BigDecimal;

public class User {

    private String name;

    private Integer age;

    private BigDecimal salary;

    private Long xpto;

    private Boolean verified;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public Long getXpto() {
		return xpto;
	}

	public void setXpto(Long xpto) {
		this.xpto = xpto;
	}

	public Boolean getVerified() {
		return verified;
	}

	public void setVerified(Boolean verified) {
		this.verified = verified;
	}

}
