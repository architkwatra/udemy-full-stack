package com.architfullstack.backend;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.*;
//import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
public class HelloWorldController {
	
	//@RequestMapping(method=RequestMethod.GET, path="/hello-world")
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World. This is my first ever web/REST API using springboot !! Congrats to me";
	}
	
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World. This is my first ever web/REST API using springboot !! Congrats to me");
	}
	
	
}
