import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = ({setCurrentUser, setIsAuthenticated, isAuthenticated}) => {
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      
      
    });
   
  };
 
 const navigate = useNavigate()

  const handleSubmit = (event) => {
    
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
      })
    .then((res) => {
            if (res.ok) {
        res.json().then((obj) => {
          setCurrentUser(obj);
          setIsAuthenticated(true)
          navigate("/browse")
        });
      } else {
        
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
    
  };



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              id="name-input"
              type="text"
              name="username"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
              <br></br>
        
        {!isAuthenticated ? <div className="signupPrompt">
            <p>Don't have an Account?</p>
            <button onClick={() => {}}>Click Here To Create An Account</button>
            </div> : null}
      </div>
  );


};

export default LoginForm;