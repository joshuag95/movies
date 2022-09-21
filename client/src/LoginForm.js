import React, { useState } from "react";
import {useHistory} from 'react-router-dom'


const LoginForm = ({setCurrentUser, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      
      
    });
  };
 
 
  const handleSubmit = (event) => {
    console.log(formData)
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log(res)
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          history.push('/me');
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };

  const history = useHistory("");

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              id="username-input"
              type="text"
              username="username"
              value={formData.username}
              onChange={handleChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password-input"
              type="password"
              username="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
              <br></br>
        
        {!isAuthenticated ? <div className="signupPrompt">
            <p>Don't have an Account?</p>
            <button onClick={() => {history.push('/signup')}}>Click Here To Create An Account</button>
            </div> : null}
      </div>
  );


};

export default LoginForm;