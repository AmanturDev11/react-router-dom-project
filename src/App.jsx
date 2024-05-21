import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import HomePage from "./components/pages/HomePage";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
	const [cards, setCards] = useState([]);

	const getTodos = async () => {
		const url =
			"https://api-v2.elchocrud.pro/api/v1/3f8f95003f4f53789c3cec7810c02d8c/RouterGo";
		const response = await axios.get(url);
		setCards(response.data);
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage setCards={setCards} />} />
					<Route path="/contact" element={<ContactPage cards={cards} />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
