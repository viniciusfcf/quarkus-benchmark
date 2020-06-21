package com.github.viniciusfcf.quarkus;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
@Table(name = "user", schema = "public")
public class User extends PanacheEntityBase {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    public String firstname;

    public Integer age;

    public BigDecimal salary;

    public Long points;

	public Boolean verified;
	
	@CreationTimestamp
	public LocalDateTime creation;

}
