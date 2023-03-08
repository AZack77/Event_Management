import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavScrollExample from "./nav";

function EventUpdate() {
  const [details, setDetails] = useState({
    createid:"",
    title:"",
    organizer: "",
    type:"",
    category:"",
    startdate:"",
    enddate:"",
    startime:"",
    endtime:""
  });   

  const handleChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/create/update`, details).then((res) => {
      console.log(res.data);
      setDetails({createid:"",title:"",organizer: "",type:"",category:"",startdate:"",enddate:"",startime:"",endtime:"" });
    });
  };
  
  return (
    <div>
        <NavScrollExample></NavScrollExample>
        <h3 className="uhead">Update Event Details</h3>
      <div className='uplace'>
            <Form className='w-75'  onSubmit={handleSubmit}>
      <div className="mb-3" >
      <Form.Group className="mb-3" >
        <Form.Label>Event id</Form.Label>
        <input className="form-control"  type="text" id='createid' name='createid' value={details.createid} onChange={handleChange} placeholder="Event id" />
      </Form.Group>
        <label >Title</label>
        <input className="form-control" type="text" id='title' name='title' value={details.title} onChange={handleChange} placeholder="Title" />
      </div>

      <Form.Group className="mb-3" >
        <Form.Label>Organizer</Form.Label>
        <input className="form-control"  type="text" id='organizer' name='organizer' value={details.organizer} onChange={handleChange} placeholder="Organizer" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Type</Form.Label>
        <input className="form-control"  type="text" id='type' name='type' value={details.type} onChange={handleChange} placeholder="Type" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Category</Form.Label>
        <input className="form-control"  type="text" id='category' name='category' value={details.category} onChange={handleChange} placeholder="Category" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Startdate</Form.Label>
        <input className="form-control"  type="date" id='startdate' name='startdate' value={details.startdate} onChange={handleChange} placeholder="Startdate" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enddate</Form.Label>
        <input className="form-control"  type="date" id='enddate' name='enddate' value={details.enddate} onChange={handleChange} placeholder="Enddate" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Start Time</Form.Label>
        <input className="form-control"  type="text" id='starttime' name='starttime' value={details.starttime} onChange={handleChange} placeholder="Starttime" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>End Time</Form.Label>
        <input className="form-control"  type="text" id='endtime' name='endtime' value={details.endtime} onChange={handleChange} placeholder="Endtime" />
      </Form.Group>
      <Form.Group className="mb-3" ></Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
    </div>
    </div>
  );
}

export default EventUpdate;