import React, { useEffect, useState } from "react";
import "./App.css";

const API =
	"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const App = () => {
	const [quotes, setQuotes] = useState([]);
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");
	const [index, setIndex] = useState(0);

	const tweetURL = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;

	useEffect(() => {
		fetchData();
	}, [index]);

	const fetchData = () => {
		return fetch(API)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res.quotes);
				setQuotes(res.quotes);
				setAuthor(res.quotes[index].author);
				setQuote(res.quotes[index].quote);
			});
	};

	const displayData = () => {
		console.log(quotes[index].author);
		console.log(quotes[index].quote);
		setAuthor(quotes[index].author);
		setQuote(quotes[index].quote);
	};

	const changeQuoteHandler = () => {
		let randomNum = Math.floor(Math.random() * quotes.length);
		console.log(randomNum);
		setIndex(randomNum);
		// displayData();
	};

	return (
		<div className="d-flex align-items-center justify-content-center vh-100">
			<div className="col-6 box p-5 rounded">
				<div className="mb-4">
					<h3>
						<i className="fas fa-quote-left"></i>
						{quote}
					</h3>
					<p style={{ textAlign: "right", fontStyle: "italic" }}>- {author}</p>
				</div>
				<div className="d-flex justify-content-between">
					<a href={tweetURL} target="_blank" className="btn btn-primary">
						<i className="fab fa-twitter"></i> Twitter
					</a>
					<button className="btn btn-primary" onClick={changeQuoteHandler}>
						Get Quote
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
