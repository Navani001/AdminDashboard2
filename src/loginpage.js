import React from 'react';
import styles from'./Login.module.css';
import {Link} from "react-router-dom";
import authImage from './images/auth.jpeg';
import logoImage from './images/logo.jpeg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
const Login = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async(event) => {
    
    event.preventDefault();
    const response=await axios.post('http://localhost:2500/', {
      username: inputs.username,
      userpassword:inputs.password
    })
    
      if (response.data.message==='success') {
        navigate('/Dashboard')
        } else 
        {
        navigate('/')
        }
      
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  return (
   
   <body className={styles.negi}>
    <div className={styles.ngh}>
    <div className={styles.homepage}>
      <div className={styles.left}>
        <p className={styles.para}>
          <span className={styles.project}>
            Project manager
          </span>
          <br />
          <br />
          it's not just about the numbers, but the story they tell and the decisions they empower!
        </p>
        <img className={styles.bird} src={authImage} alt="" />
      </div>
      <div className={styles.right}>
        <img className={styles.bit} src={logoImage} alt="" />
        <p className={styles.bold}>
          Sign In<br />
          Get Access to your account
        </p>
        <hr className={styles.karr} />
        <form  onSubmit={handleSubmit} method='post'>
        <p className={styles.input}>
         
          <span className={styles.info}>User Name</span><br />
          <input type="text" placeholder="Enter your username" name="username" value={inputs.username || ""} 
            onChange={handleChange}  />
        </p>
        <p className={styles.input}>
          <span className={styles.info}>Password</span><br />
          <input type="password" placeholder="Enter your password" name="password" maxLength="10" value={inputs.password || ""} 
        onChange={handleChange} />
        </p>
        <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </form>
      </div>
    </div>
   </div>
    </body>
  );
}

export default Login;