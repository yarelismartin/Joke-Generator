// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getAJoke from '../api/getAJoke';
import { showJoke, showPunchline } from '../pages/showJoke';
import renderToDom from '../utils/renderToDom';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>HELLO! Welcome to the Joke Generator</h1>
    <div id="joke-container">
    <div id="joke"></div>
    <div id="punchline"></div>
    <div id="btn-container">
    <button class="btn btn-danger" id="joke-btn">Get a Joke!</button><br />
    </div>
    </div>
    <hr />
  `;

  /* Adding an event listener to the joke container so we can listen
  to not only rhe joke-btn but then punchline-btn we will render on our DOM */
  document
    .querySelector('#joke-container')
    .addEventListener('click', (e) => {
      // Check if the clicked element has an id that includes 'joke-btn'
      if (e.target.id.includes('joke-btn')) {
        // If true, render a new button for getting punchline
        renderToDom('#btn-container', '<button class="btn btn-danger" id="punchline-btn">Get Punchline!</button><br />');
        getAJoke().then((response) => {
          // Display the setup part of the joke
          showJoke(response);
          // Display the punchline part of the joke
          showPunchline(response);
          // Hide the punchline element
          document.querySelector('#punchline').style.display = 'none';
        });
      }
      // Check if the clicked element has an id that includes 'punchline-btn'
      if (e.target.id.includes('punchline-btn')) {
        // If true, display the punchline and render a new button for getting another joke
        document.querySelector('#punchline').style.display = 'block';
        renderToDom('#btn-container', '<button class="btn btn-danger" id="joke-btn">Get Another Joke!</button><br />');
      }
    });
  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
