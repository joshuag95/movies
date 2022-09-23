import { NavLink } from "react-router-dom"

export default function NavBar({ isAuthenticated, currentUser, handleLogout }) {


    return (
        <div>

            <NavLink path to="/">Home</NavLink>
            {!isAuthenticated ? <NavLink path to="/browse">Browse</NavLink> : <button onClick={handleLogout}>Logout</button>}



        </div>
    )
}
