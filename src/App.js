import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"

import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
//import PricingPage from "./pages/PricingPage"
import TeamPage from "./pages/TeamPage"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import Footer from "./pages/Footer"
//import ProgramsModal from "./components/modals/Programs"
import Students from "./pages/StudentsPage"
import Teachers from "./pages/TeachersPage"
import Leaders from "./pages/LeadersPage"
import Events from "./pages/Mission"
//import { AuthProvider } from "./components/auth/Auth"
import { AuthContextProvider } from "./components/auth/AuthContext"
import Prediction from "./pages/Predictition"
import PrivateRoute from "./components/auth/PrivateRoute"


const App = () => {
	return (
		<div className="App">
			<Header />
			<AuthContextProvider>
				<Routes>
				<Route path="/" element={<HomePage />} />
					<Route path="/about-us" element={<AboutPage />} />
					<Route path="/team" element={<TeamPage />} />
					<Route path="/sign-up" element={<SignUpPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/students" element={<Students />} />
					<Route path="/teachers" element={<Teachers />} />
					<Route path="/leaders" element={<Leaders />} />
					<Route path="/events" element={<Events />} />
					<Route path="/prediction" element={<PrivateRoute><Prediction /></PrivateRoute>} />
				</Routes>
			</AuthContextProvider>
			<Footer />

		</div>
	)
}

export default App