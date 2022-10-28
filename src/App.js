import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// views
import Home from "./views/Home";
import About from "./views/About";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			{/* Header Area */}
			<div className="max-w-full">
				<Header />
			</div>
			{/* Route Area */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
			</Routes>
			{/* Footer Area */}
			<div className="max-w-full">
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
