package com.github.viniciusfcf.quarkus;

import java.util.List;
import java.util.Random;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.config.inject.ConfigProperty;

import io.quarkus.panache.common.Sort;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    private static final Random RANDOM = new Random();

    @ConfigProperty(name = "page.size", defaultValue = "20")
    Integer pageSize;

    @GET
    @Path("hello")
    public String hello() {
        return "hello";
    }

    @GET
    @Path("sleep")
    public String sleep() throws InterruptedException {
        //sleep beetween 1 and 2 seconds
        Thread.sleep(RANDOM.nextInt(1000)+1000);
        return "waked up";
    }

    @GET
    public List<User> findAll() {
        int usersCount = 100_000;
        int maxPage = usersCount / pageSize;
        int pageIndex = RANDOM.nextInt(maxPage);
		return User.findAll(Sort.ascending("firstname")).page(pageIndex, pageSize).list();
    }

    @POST
    @Transactional
    public void add(User user) {
        user.persist();
    }

    
}