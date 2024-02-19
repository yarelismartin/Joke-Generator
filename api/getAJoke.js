/* Define the API endpoint for fetching a programming-related joke.
The endpoint is where the application sends a request to retrieve a joke,
and the API processes that request, returning the joke data in response. */
const endpoint = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&type=twopart';

// takes two parameters: resolve and reject, which are functions to be called when the asynchronous operation is successful or encounters an error
const getAJoke = () => new Promise((resolve, reject) => {
  // Use the fetch API to make a GET request to the specified endpoint
  fetch(endpoint, {
    // Use the fetch API to make a GET request
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    // converts the response to JSON using the json() method, which returns another Promise.
    .then((response) => response.json())
    // calls the resolve function of the outer Promise, passing the parsed data
    .then((data) => resolve(data))
    // calls the reject function of the outer Promise, passing the error.
    .catch(reject);
});

export default getAJoke;
