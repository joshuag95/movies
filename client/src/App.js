import './App.css';

import { useEffect, useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import NavBar from './NavBar';
import Home from './Home';
import Media from './Media';
import Profile from './Profile';
import MyFlicks from './MyFlicks';
import AllUsers from './AllUsers';

function App() {

	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [currentUser, setCurrentUser] = useState({});

	const navigate = useNavigate()


	useEffect(() => {
		fetch("/me").then((res) => {
			if (res.ok) {
				res.json().then((user) => {
					setCurrentUser(user);
					setIsAuthenticated(true);
				});
			}
		});
	}, []);



	// Logout Functionality passed to NavBar

	const handleLogout = () => {
		setCurrentUser(null);
		fetch('/logout', { method: "DELETE" });
		navigate('/');
		setIsAuthenticated(false)
	}



	
	return (
		<div className="App">
			<NavBar isAuthenticated={isAuthenticated} currentUser={currentUser} handleLogout={handleLogout} />
			{/* When User first arrives to site they will be directed to Signup/Login Page. They will only have access to this landing page, 
				and cannot browse movies until they make an account */}
			{!isAuthenticated ?
				<Routes>
					<Route path="/" element={<Home isAuthenticated={isAuthenticated} setCurrentUser={setCurrentUser} currentUser={currentUser} handleLogout={handleLogout} />} />
					<Route path="/browse" element={<Media />} />

				</Routes>
				:
				<Routes>

					<Route path="/browse" element={<Media />} />
					<Route path="/profile" element={<Profile user = {currentUser} setCurrentUser ={setCurrentUser} />} />
					<Route path="/myflicks" element={<MyFlicks />} />
					<Route path="/all_users" element={<AllUsers />} />

					

				</Routes>

			}

		</div>
	);
}


export default App;
