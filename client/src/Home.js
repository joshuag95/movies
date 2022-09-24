import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Media from "./Media";
import { useState, useEffect } from "react";

function Home({isAuthenticated, setCurrentUser, handleLogout}){


    
    return (
        <div>
        
            <p>Welcome to NextFlick</p>
        {!isAuthenticated ? 
            <div> 
                <SignupForm setCurrentUser={setCurrentUser} /> 
                <LoginForm setCurrentUser={setCurrentUser}  isAuthenticated ={isAuthenticated}/>
            </div> 
        : 
            null
        }     
        
				
				
		              
        </div>
    )
}

export default Home


// export const NotFound = () => {
//     return (
//         <>
//             <h1>404 not found</h1>
            
//         </>
//     )
// }
