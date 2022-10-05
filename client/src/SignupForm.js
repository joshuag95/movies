import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const SignupForm = ({ setCurrentUser, setIsAuthenticated }) => {

  const [alreadyAccount, setAlreadyAccount] = useState(false)

  
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    username: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  let navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };


    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          navigate("/browse")
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);

        });

      }
    });

  }

  return (
    <section className="bg-grey dark:bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section
          className="relative flex items-end h-32 bg-gray-900 lg:col-span-6 lg:h-full xl:col-span-6"
        >
          <img
            alt="Night"
            src="https://w0.peakpx.com/wallpaper/277/14/HD-wallpaper-cinema-movies-theatre-popcorn-entertaintment-chill.jpg"
            className="absolute inset-0 object-cover w-full h-full opacity-40"
          />

          <div className="hidden lg:block lg:relative lg:p-12">
           

            <h1 className="mt-6 text-2xl font-bold text-yellow-500 sm:text-3xl md:text-4xl">
              Welcome to NextFlick!
            </h1>

            <p className="mt-4 leading-relaxed text-white/90">
              The movie and tv tracking app to try with your friends
            </p>
          </div>
        </section>

        <main
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            
          {!alreadyAccount ? 
            <form action="#" className="grid grid-cols-6 gap-6 mt-8" onSubmit={handleSubmit}>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-700 dark:text-gray-200"
                >
                  Name (First, Last)
                </label>

                <input
                  id="name-signup-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 text-md text-gray-700 bg-white border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                />
              </div>
              
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Username"
                  className="block text-md font-medium text-700 dark:text-gray-200"
                >
                  Username
                </label>

                <input
                  id="username-signup-input"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                  className="w-full mt-1 text-md text-gray-700 bg-white border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="email"
                  className="block text-md font-medium text-700 dark:text-gray-200"
                >
                  Email
                </label>

                <input
                  id="email-signup-input"
                  type="text"
                  name="email"
                  value={formData.email}
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

              {/* <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                />
              </div> */}

              {/* <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="w-5 h-5 bg-white border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700"
                  />

                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div> */}

              <div className="col-span-6">
                <p className="text-sm text-500 dark:text-gray-400">
                  By creating an account, you agree to our 
                  <a href="#" className="text-yellow-700 underline dark:text-gray-200">
                    terms and conditions
                  </a>
                  and
                  <a href="#" className="text-yellow-700 underline dark:text-gray-200">
                    privacy policy </a
                  >.
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button type="submit"
                  className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-red-900 border border-yellow-700 rounded-md shrink-0 hover:bg-transparent hover:text-red-700 focus:outline-none focus:ring active:text-yellow-700 dark:hover:bg-red-700 dark:hover:text-white"
                >
                  Create an account
                </button>

                <p className="mt-4 text-sm text-500 dark:text-gray-400 sm:mt-0">
                  Already have an account?
                  <button onClick={() => {setAlreadyAccount((alreadyAccount) => !alreadyAccount)}} className="text-yellow-700 underline dark:text-gray-200">
                    Log in</button>.
                </p>
              </div>
            </form>
            : 
            <LoginForm setAlreadyAccount={setAlreadyAccount} setCurrentUser={setCurrentUser} setIsAuthenticated ={setIsAuthenticated}/>  }
          </div>
        </main>
      </div>
    </section>


    // <form onSubmit={handleSubmit}>
    //   <label htmlhtmlFor="name">Name:</label>
    //   <input
    //     id="name-signup-input"
    //     type="text"
    //     name="name"
    //     value={formData.name}
    //     onChange={handleChange}
    //   />
    //   <label htmlhtmlFor="email">Email:</label>
    //   <input
    //     id="email-signup-input"
    //     type="text"
    //     name="email"
    //     value={formData.email}
    //     onChange={handleChange}
    //   />
    //   <label htmlhtmlFor="username">Username:</label>
    //   <input
    //     id="username-signup-input"
    //     type="text"
    //     name="username"
    //     value={formData.username}
    //     onChange={handleChange}
    //   />
    //   <label htmlhtmlFor="password">Password:</label>
    //   <input
    //     required="password"
    //     id="password-signup-input"
    //     type="password"
    //     name="password"
    //     value={formData.password}
    //     onChange={handleChange}
    //   />
    //   <button type="submit">Submit</button>
    // </form>
  );
};

export default SignupForm;