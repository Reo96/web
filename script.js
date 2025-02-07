const messages = [
    "Are you sure?",
    "i mean really really sure??",
    "asa ni kr na",
    "Preety please...",
    "thoda v pasand ni krti meko???",
    "suar h kya? maan ja na",
    "asa mna kregi meko?",
    "pls na😗",
    "bss bhot hogya ab too yha tk agaii sli 😑😑",
    "Ok fine, bhaddd m jaa...",
    "Just kidding, say yes please! hehe 😅"
    
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);                                        
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
