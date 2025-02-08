const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');

const proposals = [
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Please say yes!",
    "I'll ask one more time...",
    "You're breaking my heart...",
    "Just say yes already!",
    "I'm not giving up!",
    "Yes is the only option!",
    "I'll keep asking until you say yes!"
];

let proposalIndex = 0;

yesButton.addEventListener('click', () => {
    response.textContent = "Yay! I love you so much! 💖";
    noButton.style.display = 'none';
    yesButton.style.display = 'none';
});

noButton.addEventListener('click', () => {
    response.textContent = proposals[proposalIndex];
    proposalIndex = (proposalIndex + 1) % proposals.length;
    noButton.style.fontSize = `${parseInt(window.getComputedStyle(noButton).fontSize) + 2}px`;
    yesButton.style.fontSize = `${parseInt(window.getComputedStyle(yesButton).fontSize) + 2}px`;
});
