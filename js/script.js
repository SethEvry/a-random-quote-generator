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
 * `getRandomQuote` function
 ***/
const getRandomQuote = function () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
