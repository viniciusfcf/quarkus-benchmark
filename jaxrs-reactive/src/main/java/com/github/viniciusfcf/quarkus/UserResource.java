package com.github.viniciusfcf.quarkus;

import java.util.Random;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.config.inject.ConfigProperty;

import io.smallrye.mutiny.Multi;
import io.smallrye.mutiny.Uni;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    private static final Random RANDOM = new Random();


    @Inject
    io.vertx.mutiny.pgclient.PgPool client;
    
    @ConfigProperty(name = "page.size", defaultValue = "20")
    Integer pageSize;

    @GET
    @Path("hello")
    public Uni<String> hello() {
        return Uni.createFrom().item(() -> "hello");
    }

    @GET
    @Path("sleep")
    public Uni<String> sleep() throws InterruptedException {
        //sleep beetween 1 and 2 seconds
        Thread.sleep(RANDOM.nextInt(1000)+1000);
        return Uni.createFrom().item(() -> "waked up");
    }

    @GET
    public Multi<User> findAll() {
        int usersCount = 100_000;
        int maxPage = usersCount / pageSize;
        int pageIndex = RANDOM.nextInt(maxPage);
		return User.findAll(client, pageIndex, pageSize);
    }

    // @POST
    // @Transactional
    // public void add(User user) {
    //     user.persist();
    // }

    
}