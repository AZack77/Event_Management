package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class loginData {
	@Id
	private int Loginid;
	private String Name;
	private String Password;
	public loginData(int loginid, String name, String password) {
		super();
		Loginid = loginid;
		Name = name;
		Password = password;
	}
	public loginData() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getLoginid() {
		return Loginid;
	}
	public void setLoginid(int loginid) {
		Loginid = loginid;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	
}
