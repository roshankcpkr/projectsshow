// Get references to HTML elements
const searchInputEl = document.getElementById('searchInput');
const searchButtonEl = document.getElementById('searchButton');
const synonymsListEl = document.getElementById('synonymsList');
const sentenceDisplayEl = document.getElementById('sentenceDisplay');

// Event listener for the search button
searchButtonEl.addEventListener('click', initiateSearch);

// Function to initiate synonym search
function initiateSearch() {
   const inputWord = searchInputEl.value.trim();

   if (inputWord) {
      fetchSynonyms(inputWord);
   } else {
      resetResults();
   }
}

// Function to fetch and display synonyms
function fetchSynonyms(word) {
   const apiUrl = `https://api.datamuse.com/words?rel_syn=${word}&max=10`;

   fetch(apiUrl)
      .then(response => response.json())
      .then(displaySynonymsList)
      .catch(handleError);
}

// Function to handle API errors
function handleError(error) {
   console.log('An error occurred:', error);
}

// Function to display synonyms and handle clicks
function displaySynonymsList(synonyms) {
   resetResults();

   if (synonyms.length === 0) {
      synonymsListEl.innerHTML = 'No synonyms found.';
      return;
   }

   synonyms.forEach(synonym => {
      const synonymItem = createSynonymListItem(synonym.word);
      synonymsListEl.appendChild(synonymItem);

      // Add a click event listener to each synonym item
      synonymItem.addEventListener('click', () => {
         displayAssociatedSentence(synonym.word);
      });
   });
}

// Function to create a list item for synonyms
function createSynonymListItem(text) {
   const listItemEl = document.createElement('li');
   listItemEl.textContent = text;
   return listItemEl;
}

// Function to display a sentence for a selected synonym
function displayAssociatedSentence(word) {
   // Replace this with your code to fetch a sentence containing the selected word
   // For demonstration purposes, we'll use a placeholder sentence
   const sentence = `A sentence containing the word "${word}" is displayed here.`;

   sentenceDisplayEl.textContent = sentence;
}

// Function to reset search results
function resetResults() {
   synonymsListEl.innerHTML = '';
   sentenceDisplayEl.textContent = '';
   searchInputEl.value = '';
}
