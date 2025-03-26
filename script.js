const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatLog = document.getElementById('chat-log');

// API URL and endpoint
const apiUrl = 'https://example.com/api/chat';
const endpoint = '/messages';

// Send message function
function sendMessage(message) {
    fetch(`${apiUrl}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayMessage(data.message);
    })
    .catch(error => console.error(error));
}

// Display message function
function displayMessage(message) {
    const messageHTML = `
        <div>
            <span>${message}</span>
        </div>
    `;
    chatLog.innerHTML += messageHTML;
}

// Event listeners
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        sendMessage(message);
        messageInput.value = '';
    }
});

messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendButton.click();
    }
});