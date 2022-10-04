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
		const fetchData = async () => {
			const res = await fetch(API);
			const res_1 = await res.json();
			// console.log(res.quotes);
			setQuotes(res_1.quotes);
			setAuthor(res_1.quotes[index].author);
			setQuote(res_1.quotes[index].quote);
		};
		
		fetchData();
	}, [index]);

	// const displayData = () => {
	// 	console.log(quotes[index].author);
	// 	console.log(quotes[index].quote);
	// 	setAuthor(quotes[index].author);
	// 	setQuote(quotes[index].quote);
	// };

	const changeQuoteHandler = () => {
		let randomNum = Math.floor(Math.random() * quotes.length);
		// console.log(randomNum);
		setIndex(randomNum);
		// displayData();
	};

	return (
		<div className="d-flex align-items-center justify-content-center vh-100">
			<div id="quote-box" className="col-6 box p-5 rounded">
				<div className="mb-4">
					<h3 id="text">
						<i className="fas fa-quote-left"></i>
						{quote}
					</h3>
					<p id="author" style={{ textAlign: "right", fontStyle: "italic" }}>- {author}</p>
				</div>
				<div className="d-flex justify-content-between">
					<a id="tweet-quote" href={tweetURL} target="_blank" rel="noreferrer" className="btn btn-primary">
						<i className="fab fa-twitter"></i> Twitter
					</a>
					<button id="new-quote" className="btn btn-primary" onClick={changeQuoteHandler}>
						Get Quote
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
