import renderToDom from '../utils/renderToDom';

// Function to display the setup part of a joke
const showJoke = (joke) => {
  console.warn(joke, 'show Joke');

  // Initialize an empty string to build the HTML content
  let domString = '';

  // Append the setup part of the joke to the HTML string. the joke will end up being response in the main.js
  domString += `<h3>${joke.setup}</h3>`;

  renderToDom('#joke', domString);

  return joke;
};

// Function to display the delivery (punchline) part of a joke
const showPunchline = (joke) => {
  console.warn(joke, 'show Punchline');

  let domString = '';

  domString += `<h3>${joke.delivery}</h3>`;

  renderToDom('#punchline', domString);
};

export { showJoke, showPunchline };
