package com.github.viniciusfcf.quarkus;

import java.util.Random;

import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.config.inject.ConfigProperty;

import io.quarkus.panache.common.Sort;
import io.quarkus.vertx.web.Route;
import io.quarkus.vertx.web.RouteBase;
import io.vertx.core.http.HttpMethod;
import io.vertx.core.json.Json;
import io.vertx.ext.web.RoutingContext;

@RouteBase(path = "users", produces = MediaType.APPLICATION_JSON, consumes = {MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN, ""}) 
public class UserResource {

    private static final Random RANDOM = new Random();

    @ConfigProperty(name = "page.size", defaultValue = "20")
    Integer pageSize;


    @Route(path = "/hello", methods = HttpMethod.GET)
    public void hello(RoutingContext rc) {
        rc.response().end("hello");
    }

    @Route(path = "/sleep", methods = HttpMethod.GET)
    public void sleep(RoutingContext rc) throws InterruptedException {
        //sleep beetween 1 and 2 seconds
        Thread.sleep(RANDOM.nextInt(1000)+1000);
        rc.response().end("waked up");
    }

    @Route(path = "", methods = HttpMethod.GET, type = Route.HandlerType.BLOCKING)
    public void findAll(RoutingContext rc) {
        int usersCount = 100_000;
        int maxPage = usersCount / pageSize;
        int pageIndex = RANDOM.nextInt(maxPage);
        String encode = Json.encode(User.findAll(Sort.ascending("firstname")).page(pageIndex, pageSize).list());
		rc.response().end(encode);
    }

    // @Route(methods = HttpMethod.POST)
    // @Transactional
    // public void add(RoutingContext rc, User user) {
    //     //FIXME testar 
    //     user.persist();
    //     rc.response().end();
    // }

    
}