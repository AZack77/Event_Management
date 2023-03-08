import React, { useState } from 'react';
import NavScrollExample from './nav';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Create()
{
    const[title,setTitle] = useState('');
    const[organizer,setOrganizer] = useState('');
    const[type,setType] = useState('');
    const[category,setCategory] = useState('');
    const[startdate,setStartdate] = useState('');
    const[enddate,setEnddate] = useState('');
    const[starttime,setStarttime] = useState('');
    const[endtime,setEndtime] = useState('');

    const handleSubmit = (event)=>
    {
        event.preventDefault();

        const data = {
            title:title,
            organizer: organizer,
            type:type,
            category: category,
            stardate: startdate,
            enddate: enddate,
            startdate: starttime,
            endtime: endtime
        };

        fetch('http://localhost:8080/crea',
        {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })

        .then(response => response.json())
        .then(data=>console.log(data))
        .catch(error=>console.error(error));
    }
    return(
        <div>
            <NavScrollExample></NavScrollExample>
            <h3 className='uhead'>Create a Event</h3>
                <div className='cplace'>
            <Form className='w-75' onClick={handleSubmit} >
      <div className="mb-3" >
        <label >Title</label>
        <input className="form-control" type="text" id='title' name='title' value={title} onChange={event=>setTitle(event.target.value)} placeholder="Title" />
      </div>

      <Form.Group className="mb-3" >
        <Form.Label>Organizer</Form.Label>
        <input className="form-control"  type="text" id='organizer' name='organizer' value={organizer} onChange={event=>setOrganizer(event.target.value)} placeholder="Organizer" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Type</Form.Label>
        <input className="form-control"  type="text" id='type' name='type' value={type} onChange={event=>setType(event.target.value)} placeholder="Type" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Category</Form.Label>
        <input className="form-control"  type="text" id='category' name='category' value={category} onChange={event=>setCategory(event.target.value)} placeholder="Category" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Startdate</Form.Label>
        <input className="form-control"  type="date" id='startdate' name='startdate' value={startdate} onChange={event=>setStartdate(event.target.value)} placeholder="Startdate" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Enddate</Form.Label>
        <input className="form-control"  type="date" id='enddate' name='enddate' value={enddate} onChange={event=>setEnddate(event.target.value)} placeholder="Enddate" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Start Time</Form.Label>
        <input className="form-control"  type="text" id='starttime' name='starttime' value={starttime} onChange={event=>setStarttime(event.target.value)} placeholder="Starttime" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>End Time</Form.Label>
        <input className="form-control"  type="text" id='endtime' name='endtime' value={endtime} onChange={event=>setEndtime(event.target.value)} placeholder="Endtime" />
      </Form.Group>
      <Form.Group className="mb-3" ></Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Link to='/participate'>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      </Link>
    </Form>
    </div>
    </div>
    );
}


export default Create;