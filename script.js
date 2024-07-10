document.addEventListener('DOMContentLoaded', () => {
    const jokeBtn = document.getElementById('joke-btn');
    const jokeBox = document.getElementById('joke-box');

    jokeBtn.addEventListener('click', () => {
        fetchJoke().then(joke => {
            jokeBox.textContent = joke;
        }).catch(error => {
            jokeBox.textContent = 'Oops! Something went wrong. Try again later.';
            console.error('Error fetching joke:', error);
        });
    });
});

function fetchJoke() {
    return new Promise((resolve, reject) => {
        fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => resolve(data.joke))
        .catch(error => reject(error));
    });
}
