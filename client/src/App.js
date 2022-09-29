import './App.css';

import { useEffect, useState } from "react"
import { Routes, Route, Link, Navigate } from "react-router-dom"
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

	
	const [tvStuff, setTvStuff] = useState([])



	return (
		<div className="App">
			<NavBar isAuthenticated={isAuthenticated} currentUser={currentUser} handleLogout={handleLogout} />
			{/* When User first arrives to site they will be directed to Signup/Login Page. They will only have access to this landing page, 
				and cannot browse movies until they make an account */}
			{!isAuthenticated ?
				<Routes>
					<Route path="/" element={<Home isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser} currentUser={currentUser} handleLogout={handleLogout} />} />
					<Route path="*" element={<Navigate to="/" replace/>}/>

				</Routes>
				:
				<Routes>

					<Route path="/browse" element={<Media currentUser = {currentUser} tvStuff={tvStuff} setTvStuff={setTvStuff} />} />
					<Route path="/profile" element={<Profile currentUser = {currentUser} setCurrentUser ={setCurrentUser} />} />
					<Route path="/myflicks" element={<MyFlicks currentUser = {currentUser} tvStuff={tvStuff} setTvStuff={setTvStuff} />} />
					<Route path="/people" element={<AllUsers currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
					{/* <Route path="*" element={<Navigate to="/browse" replace/>}/> */}

					

				</Routes>

			}

		</div>
	);
}


export default App;
