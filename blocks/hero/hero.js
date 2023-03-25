
const hero = document.querySelector('[data-block-name="hero"]');
hero.style.backgroundColor = "green";

// Select the element where you want to display the response
const displayElement = document.createElement('div');
document.body.appendChild(displayElement);

// Make a request to the URL and handle the response
const url = 'https://jsonplaceholder.typicode.com/todos/1'; // replace with your desired URL
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Create a new <div> element to display the response
    const responseElement = document.createElement('div');
    responseElement.textContent = JSON.stringify(data);
    displayElement.appendChild(responseElement);
  })
  .catch(error => console.error(error));
