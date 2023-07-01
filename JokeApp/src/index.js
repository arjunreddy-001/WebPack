import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

const laughImg = document.querySelector("#laughImg");
const jokeBtn = document.querySelector("#jokeBtn");

laughImg.src = laughing;

jokeBtn.addEventListener("click", generateJoke);

generateJoke();
