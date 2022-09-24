import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = ({setCurrentUser, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
            if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          navigate("/")
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
            <label htmlFor="name">Username:</label>
            <input
              id="name-input"
              type="text"
              name="name"
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