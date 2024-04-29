import { Button, Card, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import Bg from './Bg/bac4.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';


const SignUp = () => {
  const [inputs,setInputs]=useState({
    ename:"",
    elname:"",
    email:"",
    epass:""
  });
  const inputHandler =(e) =>{
    const {name, value} = e.target;
    setInputs((prevData) =>({...prevData,[name]: value}));
  };
  const addHandler=() =>{
    console.log("button clicked");
    axios.post("http://localhost;8080/add",inputs)
    .then((response) =>{
      console.log(response.data);
      alert(response.data);
    })
    .catch((err)=> console.log(err));
  };
  const backgroundImageStyle = {
    position: 'fixed',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    zIndex: -1,
  };
  return (
    <div>
    <img
    src={Bg}
    alt="background"
    style={backgroundImageStyle}
    />
     
     <Card variant='outlined'style={{padding:'20px',
    margin:'auto',
    marginTop:'10px',
    alignContent:'center',
  width:'300px',
  backgroundColor:'white',
  border:'0.5px solid black',
  cursor:'pointer',
  borderRadius:'30px',
  opacity:'100%',}}>
        
        <Typography variant='h4'>SIGN UP</Typography><b></b><b></b><br></br>
        <TextField label="First Name" variant="standard" name='ename' value={inputs.ename} onChange={inputHandler}
         InputProps={{
          startAdornment:(<InputAdornment position="start">
          <AccountCircle/>
          </InputAdornment>
          ),
        }}
        // variant='standard'
      style={{cursor:'pointer'}}/><br /><br />
        <TextField label="last name"  variant="standard" name='elname' value={inputs.elname} onChange={inputHandler}
         InputProps={{
          startAdornment:(<InputAdornment position="start">
          <AccountCircle/>
          </InputAdornment>
          ),
        }}
        // variant='standard'
      style={{cursor:'pointer'}}/><br /><br />
        <TextField label="email"type='gmail'  variant="standard" name='email' value={inputs.email} onChange={inputHandler} InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <EmailIcon/>
              </InputAdornment>
            ),
          }}
          style={{cursor:'pointer'}}/><br /><br />
        <TextField label="password"type='password'  variant="standard" name='pass' value={inputs.pass} onChange={inputHandler}
        InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <LockIcon/>
              </InputAdornment>
            ),
          }}
          style={{cursor:'pointer'}}/><br /><br /><br />
        <Button variant='contained'color='success'>SIGNUP</Button><br></br><br/>
            
    </Card>
        </div>
  )
}

export default SignUp