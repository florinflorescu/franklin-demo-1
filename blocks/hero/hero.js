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


let data2 = {
  "employees": [
    {
      "firstName": "John",
      "lastName": "Doe",
      "age": 30
    },
    {
      "firstName": "Jane",
      "lastName": "Doe",
      "age": 25
    },
    {
      "firstName": "Bob",
      "lastName": "Smith",
      "age": 50
    }
  ]
};

let data = {
  "total":8,
  "offset":0,
  "limit":8,
  "data":[
     {
        "firstName":"Florin",
        "formComment":"This is my forst comment"
     },
     {
        "firstName":"dfsdfds",
        "formComment":"fffffff"
     },
     {
        "firstName":"Halal",
        "formComment":"lorem ipsum"
     },
     {
        "firstName":"asdasdadadsa",
        "formComment":"dddddddddd"
     },
     {
        "firstName":"vector",
        "formComment":"Herbal"
     },
     {
        "firstName":"Telcoris",
        "formComment":"Septrum"
     },
     {
        "firstName":"Fefeleaga",
        "formComment":"Volta"
     },
     {
        "firstName":"Toga Toga",
        "formComment":"Bubu"
     }
  ],
  ":type":"sheet"
}

  export default function decorate(block) {

//Make a request to the URL and handle the response
//const url = 'https://main--franklin-demo-1--florinflorescu.hlx.page/form-data.json?sheet=results'; // replace with your desired URL
const url = '/form-data.json?sheet=results'; // replace with your desired URL
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Create a new <div> element to display the response
    const responseElement = document.createElement('table');
    responseElement.textContent = JSON.stringify(data);
    //test
    displayElement.appendChild(responseElement);

  })
  .catch(error => console.error(error));

    
  console.log("Decorate function for Hero");
  const table = document.createElement('table');
  console.log(table);
  data.data.forEach(function(data) {

    // Create a new row for the employee data
    let row = table.insertRow(-1);
  
    // Add the employee data to the row
    let firstNameCell = row.insertCell(0);
    let lastNameCell = row.insertCell(1);
    let ageCell = row.insertCell(2);
  
    firstNameCell.innerHTML = data.firstName;
    lastNameCell.innerHTML = data.formComment;
    ageCell.innerHTML = data.age;
  });
  console.log(table);
  block.append(table);
  }