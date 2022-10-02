import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Media from "./Media";
import { useState, useEffect } from "react";

function Home({setIsAuthenticated, setCurrentUser, isAuthenticated}){


    
    return (
        <div>
        
           
        {!isAuthenticated ? 
            <div> 
                <SignupForm setCurrentUser={setCurrentUser} setIsAuthenticated ={setIsAuthenticated} /> 
                <LoginForm setCurrentUser={setCurrentUser}  setIsAuthenticated ={setIsAuthenticated}/>
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
