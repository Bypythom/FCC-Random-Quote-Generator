import { useState } from 'react';
import quotesData from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import './App.css';

interface Quote {
  quote: string;
  author: string;
}

interface QuotesData {
  quotes: Quote[];
}

// Type quotesData as QuotesData to reflect the object structure in JSON
const data: QuotesData = quotesData as QuotesData;

const getRandomQuote = (): Quote => {
  return data.quotes[Math.floor(Math.random() * data.quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
};

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return <div className="background" style={{ backgroundColor: randomColor, transition}}>
      <div id="quote-box">
        <div className="quote-content" style={{ color: randomColor, transition }}>
          <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
          <h2 id="text">{quote.quote}</h2>
          <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
          <h4 id='author'>- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a href="https://twitter.com/intent/tweet?text=${quote.quote}"
          id="tweet-quote"
          style={{backgroundColor: randomColor,
          marginRight: "10px",
          transition,
          }} target="_blank"><FaTwitter color="white"/></a>
          <button id="new-quote" onClick={changeQuote} style={{ backgroundColor: randomColor, transition}}>Change Quote</button>
        </div>
      </div>
    </div>
}

export default App;
