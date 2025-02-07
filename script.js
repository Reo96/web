const messages = [
    "Are you sure?",
    "i mean really really sure??",
    "Are you positive?",
    "asa ni kr na",
    "Preety please...",
    "suar h kya? maan ja na",
    "asa mna kregi meko?",
    "pls na😗",
    "bss bhot hogya 😑😑",
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
