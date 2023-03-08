import React, { Component,useState,useEffect } from 'react';
import NavScrollExample from './nav';
import BasicExample from './participate';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link,Outlet} from 'react-router-dom'

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
function Home () {
  const cardstyle ={ backgroundColor: "#3AAFA9"};
  var a = "";
    const[events,setEvents] = useState([]);
    useEffect(()=>
    {
        
    },[a]);
    axios.get('http://localhost:8080/')
        .then(response=>{
            setEvents(response.data);
        })
        .catch(error=>{
            console.log(error);
        });

    const handleDelete = async(id)=>
    {
     await axios.delete('http://localhost:8080/create/delete/' + id)
      .then((response)=>
      {
        console.log(response);
      })
      .catch((error)=>
      {
        console.log(error);
      })
    };

      
  function refreshPage() {
    window.location.reload(false);
  }


        return(
            <div className='ho'>
            <NavScrollExample></NavScrollExample>
            <div className='header'><h3>EVENTS</h3></div>
            <div  className='all-events'>{events.map(ev=>(
               <Card style={cardstyle} className='single' sx={{ minWidth: 275 }}>
               <CardContent>
                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                   {ev.category}
                 </Typography>
                 <Typography variant="h5" component="div">
                   {ev.title}
                 </Typography>
                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
                   {ev.type}
                 </Typography>
                 <Typography variant="body2">
                   {" Conducted by : "}{ev.organizer}
                   <br />
                   {"Start Date : "}{ev.startdate}
                   <br />
                   {"Start Time : "}{ev.starttime}
                   <br />
                   {"End Date : "}{ev.enddate}
                   <br />
                   {"End Time : "}{ev.endtime}
                   <br />
                   {"Event Id : "}{ev.createid}
                 </Typography>
               </CardContent>
                    <Link to='/participate'  style={{ textDecoration: 'none' }}><Button className='ubtn' size="small">Register</Button></Link>
                
                   <Button  className='ubtn' onClick={()=>handleDelete(ev.createid)} size="small">Delete</Button>
                
                   <Link to="/update"  style={{ textDecoration: 'none' }}><Button  className='ubtn' size="small" >Update</Button></Link>
                
             </Card>
            ))}</div>
            </div>
        );
    }


export default Home;