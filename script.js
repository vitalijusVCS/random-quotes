// Array of quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
  "Life is really simple, but we insist on making it complicated. - Confucius",
  "The best way to predict your future is to create it. - Abraham Lincoln",
  "It is never too late to be what you might have been. - George Eliot",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll"
];

// Select the elements
const quoteElement = document.getElementById('quote');
const buttonElement = document.getElementById('new-quote-btn');

// Function to get a random quote
function getRandomQuote() {
  // Get a random index from the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  
  // Display the random quote
  quoteElement.textContent = quotes[randomIndex];
}

// Event listener to change quote when button is clicked
buttonElement.addEventListener('click', getRandomQuote);