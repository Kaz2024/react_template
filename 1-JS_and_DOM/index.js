// alert("Hello from JavaScript");

// 1. We store a "handle" into a variable
const titleElement = document.querySelector("h1");
const paragraphs = document.querySelector("p");


// We can shorten the two lines above like this:
document.querySelector("h1").textContent = "This is a new title";

document.getElementById("Second H1").textContent = "Pooo - best website EVER!"

// 3. Other things that we could do with the element:

// a. Hide it
titleElement.style.display = "none";

// b. Show it again
titleElement.style.display = "block";

// c. Set its HTML id (if you don't know what this is, read the section about HTML IDs below)
titleElement.id = "introduction";
const paragraph = document.querySelector("p#introduction");
paragraph.textContent = "chocolate spread www.nutella.com"


// 1. Make a new element - specifying the tag name
const newElement = document.createElement("p");
newElement.textContent = "Hey guys";

// 3. Append it to the body
const body = document.querySelector("body");
body.append(newElement);

// d. Set its HTML class (if you don't know what this is, read the section about HTML classes below)
// titleElement.className = "blue-paragraph";


const body2 = document.getElementById("2");
body.append(newElement);
const recipeListEl = document.createElement("ol"); // Create a unordered list element

const stepOneEl = document.createElement("li"); // Create a new list item element
stepOneEl.innerText = "Toast some bread"; // Update the text of the list item
recipeListEl.appendChild(stepOneEl); // Add the item as a child of the recipe list

const stepTwoEl = document.createElement("li"); // Repeat for the second instruction
stepTwoEl.innerText = "Spread on the toast";
recipeListEl.appendChild(stepTwoEl);

body.appendChild(recipeListEl); // Add the recipe list onto the body of the page


// const newRecipe (title, steps) => {[some recipes here]
    // object = recipe.map(your ad here)
// recipeList.appendChile(object)}


function addRecipe(title, steps) {
    // Create a new div element to hold the recipe
    const recipeDiv = document.createElement('div');
    recipeDiv.className = 'recipe';

    // Create and set the paragraph element for the title
    const titleElement = document.createElement('p');
    titleElement.textContent = title;
    recipeDiv.appendChild(titleElement);

    // Create an ordered list for the steps
    const stepsList = document.createElement('ol');

    // Map each step to a list item and append to the list
    steps.map(step => {
        const stepItem = document.createElement('li');
        stepItem.textContent = step;
        stepsList.appendChild(stepItem);
    });

    // Append the list of steps to the recipe div
    recipeDiv.appendChild(stepsList);

    // Append the recipe div to the body or a specific container on the page
    document.body.appendChild(recipeDiv); // Modify this if it needs to append elsewhere
}

// Example usage for the first recipe
addRecipe('Chocolate Cake', [
    'Preheat the oven to 350°F.',
    'Mix the flour, sugar, cocoa, baking soda, baking powder, and salt.',
    'Add eggs, milk, oil, and vanilla. Mix until smooth.',
    'Pour into a baking pan and bake for 30 minutes.'
]);

// Adding a second recipe
addRecipe('Strawberry Bread', [
    'Preheat your oven to 325°F (165°C).',
    'Mash the ripe bananas with a fork until smooth.',
    'Stir the melted butter into the mashed bananas.',
    'Mix in the baking soda and salt. Stir in the sugar, beaten egg, and vanilla extract.',
    'Mix in the flour.',
    'Pour the batter into a buttered loaf pan.',
    'Bake for 1 hour to 1 hour 10 minutes at 325°F (165°C).',
    'Remove from oven and let cool completely.'
]);



// jsonplaceholder is a website that returns placeholder JSON responses.
// const URL = "https://official-joke-api.appspot.com/random_joke";

// fetch(URL)
//   .then((response) => response.json()) // Get JSON data out of Response object
//   .then((todo) => {
//     // Use the returned data in some way
//     const joke = document.createElement("p#joke")
//     joke.innerText = todo
//     // console.log(todo);
//   });

// URL of the API endpoint
// const URL = "https://official-joke-api.appspot.com/random_joke";

// class fetchJoke {
// Function to fetch data from the API
//     function fetchData() {
//         fetch(URL)
//         .then((response) => response.json()) // Get JSON data out of Response object
//         .then((todo) => {
//         // Use the returned data in some way
//             console.log(todo);
//         });
//     };

//     // Function to display data in the HTML
//     function displayData(data) {
//         const dataSource = document.getElementById('dataSource');
//         data.forEach(item => {
//             const itemElement = document.createElement('p');
//             itemElement.textContent = `ID: ${item.id}, Name: ${item.name}`;
//             dataSource.appendChild(itemElement);
//     })
// };

// // Call the fetchData function when the page loads
// document.addEventListener('DOMContentLoaded', fetchData);




// const URL = "https://official-joke-api.appspot.com/random_joke";

// // Function to fetch data
// function fetchData() {
//     fetch(URL)
//         .then(response => response.json())
//         .then(joke => {
//             displayData(joke);
//         })
//         // .catch(error => console.error('Error fetching data:', error));
// };

// // Function to display the joke data in the HTML
// function displayData(joke) {
//     const dataSource = document.getElementById('dataSource');
//     // if (!dataSource) {
//     //     console.error('Joke container element not found');
//     //     return;
//     // }

//     // Clear previous joke
//     dataSource.innerHTML = '';

//     // Create elements for the setup and punchline
//     const setupElement = document.createElement('p');
//     setupElement.textContent = `Setup: ${joke.setup}`;
//     dataSource.appendChild(setupElement);

//     const punchlineElement = document.createElement('p');
//     punchlineElement.textContent = `Punchline: ${joke.punchline}`;
//     dataSource.appendChild(punchlineElement);
// }
// // Optionally, call fetchData on page load or via a button
// document.addEventListener('DOMContentLoaded', fetchData);

