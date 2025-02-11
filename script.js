import quotes from '/quotes.js';

// Select the elements
const quoteElement = document.getElementById('quote');
const buttonElement = document.getElementById('new-quote-btn');
const quoteAuthor = document.getElementById('author');
const toggleBtn = document.getElementById('make-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;


// Function to get a random quote
function getRandomQuote() {
  // Get a random index from the quotes array
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  // Display the random quote
  quoteElement.textContent = `"${randomQuote.quote}"`;
  quoteAuthor.textContent = randomQuote.author;
  toggleBtn.textContent = randomQuote.isFavorite ? 'Remove from favorites' : 'Add to favorites';

}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleBtn.textContent = currentQuote.isFavorite ? 'Remove from favorites' : 'Add to favorites';

  if (currentQuote.isFavorite) {
    // Create a new card to display the favorite quote
    const card = document.createElement('div');
    card.classList.add('favorite-card');
    card.setAttribute('data-index', currentQuoteIndex); // Store the index for removal later

    card.innerHTML = `
      <p>"${currentQuote.quote}"</p>
      <p>- ${currentQuote.author}</p>
      <button class="remove-fav-btn">Remove</button>
    `;
    favoritesContainer.appendChild(card);

    // Add event listener to the "Remove" button on the new card
    const removeBtn = card.querySelector('.remove-fav-btn');
    removeBtn.addEventListener('click', function () {
      removeFavorite(currentQuoteIndex);
    });
  } else {
    // If it's not a favorite anymore, find and remove the card
    removeFavorite(currentQuoteIndex);
  }
}

// Function to remove a favorite quote card
function removeFavorite(index) {
  // Find the card by the index data attribute
  const cardToRemove = favoritesContainer.querySelector(`.favorite-card[data-index="${index}"]`);
  
  if (cardToRemove) {
    // Remove the card from the DOM
    favoritesContainer.removeChild(cardToRemove);
  }

  // Reset the favorite status in the quotes array
  quotes[index].isFavorite = false;
  toggleBtn.textContent = 'Add to favorites';

}


// Event listener to change quote when button is clicked
buttonElement.addEventListener('click', getRandomQuote);
toggleBtn.addEventListener('click', toggleFavorite);

getRandomQuote();