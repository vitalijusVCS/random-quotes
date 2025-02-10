// Array of quotes
const quotes = [
  {
    quote: 'The only way to do great work is to love what you do',
    author: 'Steve Jobs',
  },
  {
    quote: 'Success is not the key to happiness. Happiness is the key to success',
    author: 'Albert Schweitzer',
  },
  {
    quote: 'In the end, we will remember not the words of our enemies, but the silence of our friends',
    author: 'Martin Luther King Jr',
  },
  {
    quote: 'Life is really simple, but we insist on making it complicated',
    author: 'Confucius',
  },
  {
    quote: 'The best way to predict your future is to create it',
    author: 'Abraham Lincoln',
  },
  {
    quote: 'It is never too late to be what you might have been',
    author: 'George Eliot',
  },
  {
    quote: 'Success usually comes to those who are too busy to be looking for it',
    author: 'Henry David Thoreau',
  },
  {
    quote: 'Life is 10% what happens to us and 90% how we react to it',
    author: 'Charles R. Swindoll',
  },
  
];

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