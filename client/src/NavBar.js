import { NavLink } from "react-router-dom"

export default function NavBar({ isAuthenticated, currentUser, handleLogout }) {


    return (
        <div>

           
            {!isAuthenticated ? null 
            : 
            <div>
                <NavLink path to="/browse">Browse</NavLink>
                <NavLink path to="/Profile">Profile</NavLink>
                <NavLink path to="/myflicks">My Flicks</NavLink>

            <button onClick={handleLogout}>Logout</button>
            </div>
            }



        </div>
    )
}
