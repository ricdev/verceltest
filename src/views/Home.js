import React, { useState, useEffect } from "react";
import api from "../api/api";

const Home = () => {
	const [quotes, setQuotes] = useState([]);
	const [randomQuote, setRandomQuote] = useState([]);

	useEffect(() => {
		api.get("/quotes").then((response) => {
			const quotes = response.data;
			setQuotes(quotes);
		});
	}, []);

	const generate = () => {
		let randomNumber = Math.floor(Math.random() * 1643);
		const randomQuote = quotes[randomNumber];
		setRandomQuote(randomQuote);
	};

	return (
		<section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto">
			<div className="flex lg:flex-row flex-col my-10 justify-center text-center">
				<div className="">
					<h2 className="text-3xl lg:text-4xl font-bold">
						Hello
						<span role="img" aria-label="hi">
							👋
						</span>
					</h2>
					<p className="text-xl lg:text-2xl">Wanna get random quotes?</p>
				</div>
			</div>
			<hr className="my-10" />
			<div
				className="bg-gray-100 rounded-xl p-10 w-full flex lg:flex-row flex-col items-center justify-center lg:gap-40 gap-20 lg:mb-40 mb-20"
				// style={{ backgroundColor: `#${category.hexCode}` }}
			>
				<div className="w-3/4">
					<p className="font-bold">{randomQuote.text}</p>
					<p className="italic">- {randomQuote.author}</p>
				</div>
				<div className="w-1/4">
					<div className="flex items-center mt-5 gap-3 flex-col">
						<button
							onClick={generate}
							style={{ backgroundColor: "#FE043C" }}
							className="rounded w-full lg:w-auto px-10 py-3 text-white"
						>
							Get Random Quote
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
