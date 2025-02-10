import quotes from '/quotes.js';

// Select the elements
const quoteElement = document.getElementById('quote');
const buttonElement = document.getElementById('new-quote-btn');
const quoteAuthor = document.getElementById('author');

// Function to get a random quote
function getRandomQuote() {
  // Get a random index from the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  // Display the random quote
  quoteElement.textContent = `"${randomQuote.quote}"`;
  quoteAuthor.textContent = randomQuote.author;
}

// Event listener to change quote when button is clicked
buttonElement.addEventListener('click', getRandomQuote);