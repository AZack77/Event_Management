package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class participateData {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int Participateid;
	private int event_id;
	private String Participentname;
	private String Email;
	private String Number;
	public participateData(int participateid, int event_id, String participentname, String email, String number) {
		super();
		Participateid = participateid;
		this.event_id = event_id;
		Participentname = participentname;
		Email = email;
		Number = number;
	}
	public participateData() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getParticipateid() {
		return Participateid;
	}
	public void setParticipateid(int participateid) {
		Participateid = participateid;
	}
	public int getEvent_id() {
		return event_id;
	}
	public void setEvent_id(int event_id) {
		this.event_id = event_id;
	}
	public String getParticipentname() {
		return Participentname;
	}
	public void setParticipentname(String participentname) {
		Participentname = participentname;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getNumber() {
		return Number;
	}
	public void setNumber(String number) {
		Number = number;
	}
}
