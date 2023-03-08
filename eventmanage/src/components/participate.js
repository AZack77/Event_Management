import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavScrollExample from './nav';
import {React,useState} from 'react'; 
import Home from './home';
import {Link,Outlet} from 'react-router-dom';

function BasicExample() {
const[email,setEmail] = useState('');
const[participentname,setParticipentname] = useState('');
const[number,setNumber] = useState('');
const[event_id,setEvent_id] = useState('');

const handleSubmit=(event)=>
{
    event.preventDefault();

    const details = {
        email:email,
        participentname:participentname,
        number:number,
        event_id:event_id
    };
    fetch('http://localhost:8080/participate',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' 
    },
    body: JSON.stringify(details)
    })
    .then(response=>response.json())
    .then(data =>console.log(details))
    .catch(error => console.error(error));
} ;
  return (
    <div>
    <NavScrollExample></NavScrollExample>
    <h3 className='uhead'>Register for the Event</h3>
    <div className='fplace'>
    <Form className='w-75' >
      <div className="mb-3" >
        <label>Email address</label>
        <input className="form-control" type="email" id='email' name='email' value={email} onChange={event=>setEmail(event.target.value)} placeholder="Enter email" />
      </div>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <input className="form-control"  type="text" id="participentname" name='participentname' value={participentname} onChange={event=>setParticipentname(event.target.value)} placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Mobile Number</Form.Label>
        <input className="form-control" type="text" id='number' name='number' value={number} onChange={event=>setNumber(event.target.value)} placeholder="Number" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Event id</Form.Label>
        <input className="form-control" type="number" id='event_id' name='event_id' value={event_id} onChange={event=>setEvent_id(event.target.value)} placeholder="Number" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Link to="/" ><Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button></Link>
      
    </Form>
    </div>
    </div>
  );
}

export default BasicExample;