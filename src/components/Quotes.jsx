import React, { useEffect, useState } from 'react';

// Local quotes array
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
];

const Quotes = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });

  useEffect(() => {
    // Randomly select a quote from the array
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className="flex flex-col gap-3 rounded bg-[#fffbfc]/5 p-6">
      <h2 className="font-mclaren font-medium text-[#fffbfc] text-xl">
        {quote.text}
      </h2>
      <p className="font-nunito font-light italic text-base text-[#fffbfc]">
        ~ {quote.author}
      </p>
    </div>
  )
}

export default Quotes
