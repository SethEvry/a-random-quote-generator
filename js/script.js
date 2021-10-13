/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote: `"I'm ready, I'm ready"`,
    source: `Spongebob Squarepants`,
    citation: `Spongebob Squarepants`,
    tags: [`humor`],
  },
  {
    quote: `"Mein Führer, I can walk!"`,
    source: `Dr. Strangelove`,
    citation: `Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb`,
    year: 1964,
  },
  {
    quote: `"Llama, llama, llama!"`,
    source: `Carl Wheezer`,
    citation: `Jimmy Neutron: Boy Genius`,
    tags: [`humor`, `politics`],
  },
  {
    quote: `"A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools."`,
    source: `Douglas Adams`,
    citation: `The Hitchhiker's Guide to the Galaxy`,
    year: 1979,
  },
  {
    quote: `"I live on a one-way street that's also a dead end. I'm not sure how I got there"`,
    source: `Steven Wright`,
  },
];

/***
 * Retrieves a random quote object from a quotes array.
 *
 *
 ***/
const getRandomQuote = function () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

/***
 * Uses getRandomQuote() then separates the values of the retrieved object into HTML elements.
 *
 ***/
const printQuote = function () {
  const quote = getRandomQuote();
  let html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}  
  `;
  if (quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    html += `<span class="year">${quote.year}</span>`;
  }
  if (quote.tags) {
    for (let i = 0; i < quote.tags.length; i++) {
      html += `<span class="tags">${quote.tags[i]}</span>`;
    }
  }
  html += `</p>`;
  document.getElementById("quote-box").innerHTML = html;
};
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
