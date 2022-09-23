import './App.css';

import { useEffect, useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import NavBar from './NavBar';
import Home from './Home';
import Media from './Media';

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
			<Routes>
				<Route path="/" element={<Home isAuthenticated={isAuthenticated} currentUser={currentUser} handleLogout={handleLogout} />} />
				<Route path="/browse" element={<Media />} />

			</Routes>


			{isAuthenticated ? "Hello" : null}
		</div>
	);
}


export default App;
