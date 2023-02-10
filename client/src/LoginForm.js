import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = ({ setCurrentUser, setIsAuthenticated, isAuthenticated, setAlreadyAccount }) => {
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
      headers: { "Content-Type": "application/json" },
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
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="Username"
            className="block text-md font-medium text-700 dark:text-gray-200"
          >
            Username
          </label>

          <input
            id="nameinput"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mt-1 text-md text-gray-700 bg-white border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
          />
        </div>



        <div className="col-span-6">
          <label
            htmlFor="password"
            className="block text-md font-medium text-700 dark:text-gray-200"
          >
            Password
          </label>

          <input
            required="password"
            id="password-signup-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 text-md text-gray-700 bg-white border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
          />
        </div>

        <br />
        <button type="submit" className="inline-block px-7 py-1 text-sm font-medium text-white transition bg-red-900 border border-yellow-700 rounded-md shrink-0 hover:bg-transparent hover:text-red-700 focus:outline-none focus:ring active:text-yellow-700 dark:hover:bg-red-700 dark:hover:text-white">Submit</button>
      </form>
      <br></br>

      {!isAuthenticated ? <div className="signupPrompt">
        <p className="mt-4 text-sm text-500 dark:text-gray-400 sm:mt-0">Don't have an Account?</p>
        <button className="text-yellow-700 underline dark:text-gray-200" onClick={() => { setAlreadyAccount((alreadyAccount) => !alreadyAccount) }}>Click Here To Create An Account</button>
      </div> : null}

    </div>



  );


  
};

export default LoginForm;