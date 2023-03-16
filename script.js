const jokes = //fetch(window.location.href + "/jokes.json");
[{buildup: "Why did the chicken cross the road?", punch: "To get across the street."}];

const sayJoke = () => {
    // Make sure we don't run twice at the same time
    if (sayJoke.running) return;
    sayJoke.running = true;


    // Get elements
    let jokeElem = document.getElementById("joke");
    jokeElem.innerHTML = "";
    let answerElem = document.getElementById("jokeAnswer");
    answerElem.innerHTML = "";

    window.scrollTo(0, 0);

    // Get joke from array
    joke = jokes[Math.floor(Math.random() * jokes.length)];

    // Print out joke buildup
    let i = 0;
    let interval = setInterval(() => {
        jokeElem.innerHTML += joke.buildup.charAt(i);
        if (joke.buildup.length == jokeElem.innerHTML.length) {
            clearInterval(interval);

            // Print out joke punchline once buildup is done
            i = 0;
            setTimeout(() => {
                interval = setInterval(() => {
                    answerElem.innerHTML += joke.punch.charAt(i);
                    if (joke.punch.length == answerElem.innerHTML.length) {
                        clearInterval(interval);
                        document.getElementById("jokeButton").innerHTML = "Another!";
                        sayJoke.running = false;
                    }
                    i++;
                }, 50)
            }, 1000)
        } else {
            i++;
        }

    }, 50)
}

sayJoke.running = false;