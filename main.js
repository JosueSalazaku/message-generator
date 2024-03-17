import { messages } from "./messages";

const app = document.querySelector(".app");
const section = document.querySelector(".messages");
const btn =  document.querySelector(".btn");


const randomMessages = () => {
  const randomIndex = Math.floor(Math.random() * messages.length); // Generate random index

  const randomMessage = messages[randomIndex]; // Get random message using random index
  console.log(randomMessage); // Output random message

  displayRandomMessage(randomMessage); // Call the function to display the random message
};

function displayRandomMessage(randomMessage) {
  section.replaceChildren();
  let displayMessage = document.createElement("h1");
  displayMessage.textContent = randomMessage.message; // Access the 'message' property of the random message object
  section.appendChild(displayMessage);

  let displayGenre = document.createElement("p");
  displayGenre.textContent = randomMessage.category; // Access the 'message' property of the random message object
  section.appendChild(displayGenre);

}

randomMessages(); // Call the function to get a random message
btn.addEventListener('click', function() {
  randomMessages()
});

