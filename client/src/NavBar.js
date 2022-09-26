import { NavLink } from "react-router-dom"

export default function NavBar({ isAuthenticated, currentUser, handleLogout }) {


    return (
        <div>

           
            {!isAuthenticated ? null 
            : 
            <div>
                <NavLink path to="/browse">Browse</NavLink>
                <NavLink path to="/profile">Profile</NavLink>
                <NavLink path to="/myflicks">My Flicks</NavLink>
                <NavLink path to="/people">Users</NavLink>

            <button onClick={handleLogout}>Logout</button>
            </div>
            }



        </div>
    )
}
