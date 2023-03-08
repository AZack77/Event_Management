package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class participateController {
	@Autowired
	participateRepo repo;
	@Autowired
	participateService service;
	
	@GetMapping("/getevents")
	public List<participateData> getList()
	{
		return repo.findAll();
	}
	
	
	@PostMapping("/participate")
	public participateData posting(@RequestBody participateData pd)
	{
		return repo.save(pd);
	}
}
