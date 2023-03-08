package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class createData {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int Createid;
	private String Title;
	private String Organizer;
	private String Type;
	private String Category;
	private String Startdate;
	private String Enddate;
	private String Starttime;
	private String Endtime;
//	@OneToMany
//	private participateData participateData;
	
	public createData(int Createid, String title, String organizer, String type, String category, String startdate,
			String enddate, String starttime, String endtime) {
		super();
		this.Createid = Createid;
		Title = title;
		Organizer = organizer;
		Type = type;
		Category = category;
		Startdate = startdate;
		Enddate = enddate;
		Starttime = starttime;
		Endtime = endtime;
	}
	public createData() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getCreateid() {
		return Createid;
	}
	public void setCreateid(int Createid) {
		this.Createid = Createid;
	}
	public String getTitle() {
		return Title;
	}
	public void setTitle(String title) {
		Title = title;
	}
	public String getOrganizer() {
		return Organizer;
	}
	public void setOrganizer(String organizer) {
		Organizer = organizer;
	}
	public String getType() {
		return Type;
	}
	public void setType(String type) {
		Type = type;
	}
	public String getCategory() {
		return Category;
	}
	public void setCategory(String category) {
		Category = category;
	}
	public String getStartdate() {
		return Startdate;
	}
	public void setStartdate(String startdate) {
		Startdate = startdate;
	}
	public String getEnddate() {
		return Enddate;
	}
	public void setEnddate(String enddate) {
		Enddate = enddate;
	}
	public String getStarttime() {
		return Starttime;
	}
	public void setStarttime(String starttime) {
		Starttime = starttime;
	}
	public String getEndtime() {
		return Endtime;
	}
	public void setEndtime(String endtime) {
		Endtime = endtime;
	}
}
