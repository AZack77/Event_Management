package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class createController {
	@Autowired
	createRepo repo;
	@Autowired
	createService service;
	@GetMapping("/")
	public List<createData> getData()
	{
		return repo.findAll();
	}
	
	@PostMapping("/crea")
	public createData creation(@RequestBody createData dt)
	{
		return repo.save(dt);
	}
	
	@PutMapping("/create/update")
	public String update(@RequestBody createData stu)
	{
		return service.updateDetails(stu);
	}
	@DeleteMapping("/create/delete/{id}")
	public String datadelete(@PathVariable int id)
	{
		return service.deleteDetails(id);
	}
}
