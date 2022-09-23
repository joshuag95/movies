import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Media from "./Media";


function Home({isAuthenticated, setCurrentUser, handleLogout}){
    return (
        <div>
            Home Page
             {
				!isAuthenticated ? <div> 
                <SignupForm setCurrentUser={setCurrentUser} /> <LoginForm setCurrentUser={setCurrentUser}  isAuthenticated ={isAuthenticated}/> </div>
				: 	<Media />	
				
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
