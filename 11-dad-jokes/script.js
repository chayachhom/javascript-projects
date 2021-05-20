const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', newJoke)

newJoke()

async function newJoke() {
    const config = {headers:{Accept:'application/json'}}

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()

    jokeEl.innerHTML = data.joke
}




// const jokeEl = document.getElementById('joke')
// const jokeBtn = document.getElementById('jokeBtn')

// newJoke()

// function newJoke() {
// config = {headers:{Accept:'application/json'}}

//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })

//     jokeBtn.addEventListener('click', newJoke)
// }
