

// fetch("https://official-joke-api.appspot.com/random_joke")
//     .then((response) => response.json())
//     .then((jokeJSON) => {
//         console.log(jokeJSON)
//         const body = document.querySelector("body");
//         const joke = document.createElement("p");
//         joke.innerText = `${jokeJSON.setup}'`; 
//         //  {jokeJSON.punchline}
//         const attachListener = () => {
//             const button = document.querySelector('#my-button');
//             if (button) {
//                 button.addEventListener('click', () => {
//                     console.log('clicked!');
//                     jokeJSON.punchline.display = 'block';
//                 });
//             } else {
//                 console.error('Button with id "my-button" not found.');
//             }   
//             body.append(joke)}})
//     .then(() => attachListener());
    


// const attachListener = () => {
//     const button = document.querySelector('#my-button');
//     if (button) {
//         button.addEventListener('click', () => {
//             console.log('clicked!');
//             jokeJSON.punchline.display = 'block';
//         });
//     } else {
//         console.error('Button with id "my-button" not found.');
//     }
// };





fetch("https://official-joke-api.appspot.com/random_joke")
            .then((response) => response.json())
            .then((jokeJSON) => {
                console.log(jokeJSON);
                const body = document.querySelector("body");
                const joke = document.createElement("p");
                joke.innerText = `${jokeJSON.setup} `; 
                
                // Create a span element to hold the punchline, initially hidden
                const punchline = document.createElement("span");
                punchline.innerText = jokeJSON.punchline;
                punchline.style.display = 'none'; // Hide the punchline initially

                joke.appendChild(punchline);
                body.appendChild(joke);

                attachListener(punchline);
            });

        const attachListener = (punchline) => {
            const button = document.querySelector('#my-button');
            if (button) {
                button.addEventListener('click', () => {
                    console.log('clicked!');
                    punchline.style.display = 'block'; // Show the punchline
                });
            } else {
                console.error('Button with id "my-button" not found.');
            }
        };