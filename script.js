// Wiadomość powitalna

window.onload = function() {
    addMessage("Cześć, jak tam zajęcia z JS?", "bot");
};

// Funkcja do dodawania wiadomości do czatu

function addMessage(text, sender) {
    const chat = document.getElementById("chat");

    const message = document.createElement("div");
    message.textContent = text;

    message.classList.add("message");
    message.classList.add(sender); // 'user' lub 'bot'

    chat.appendChild(message);

     chat.scrollTop = chat.scrollHeight
}


// Obsługa przycisku
document.getElementById("sendBtn").addEventListener("click", sendMessage);
document.getElementById("messageInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById("messageInput");
    const text = input.value;

    addMessage(text, "user");
    input.value = "";
    
    botReply(text);
}

function botReply(userMessage) {
    const response = getBotResponse(userMessage);

    setTimeout(() => {
        addMessage(response, "bot");
    }, 1000);
}


function getBotResponse(msg) {
        if (msg.startsWith("/")) {
    return handleCommand(msg);
}

    const responses = {
        "Hej": "Cześć!",
        "Jak się masz?": "Dobrze 🙂",
        "Co robisz?": "Rozmawiam z Tobą 😉"
    };

    msg = msg.toLowerCase().trim();

    if (responses[msg]) {
        return responses[msg];
    }

    return getRandomResponse(defaultResponses);
}


// tablica odpwiedzi 
const defaultResponses = [
    "Aj makarena!",
    "Aby usmażyć jajko, nalej wody do szklanki",
    "Smoke on the water",
    "W dzień wypłaty wątroba dostaje baty",
    "Przesiałeś piach?",
    "Muszę przyznać, że autorowi nie chciało się poprcować nad CSSami"
];

// Losowanie odpowiedzi z tablicy 
function getRandomResponse(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}