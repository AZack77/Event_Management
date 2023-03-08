package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class createService {
	@Autowired
	createRepo repo;
	
	public String updateDetails(createData dt)
	{
		repo.save(dt);
		return "updated";
	}
	
	public String deleteDetails(int id)
	{
		repo.deleteById(id);
		return "Data Deleted";
	}
}
