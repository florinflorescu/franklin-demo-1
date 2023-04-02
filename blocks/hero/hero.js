// create a new meta tag element
var cspMeta = document.createElement('meta');

// set the http-equiv attribute to "Content-Security-Policy"
cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');

// set the content of the meta tag to your desired Content-Security-Policy
cspMeta.setAttribute('content', 'default-src https:');

// add the meta tag to the document's head element
document.head.appendChild(cspMeta); 

const hero = document.querySelector('[data-block-name="hero"]');
hero.style.backgroundColor = "green";

// Select the element where you want to display the response
const displayElement = document.createElement('div');
document.body.appendChild(displayElement);

// Make a request to the URL and handle the response
const url = 'https://main--franklin-demo-1--florinflorescu.hlx.page/form-data.json?sheet=results'; // replace with your desired URL
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Create a new <div> element to display the response
    const responseElement = document.createElement('div');
    responseElement.textContent = JSON.stringify(data);
    //test
    displayElement.appendChild(responseElement);
  })
  .catch(error => console.error(error));
