let currentChatUser = 1; // Domyślnie użytkownik Jan Kowalski

const users = [
    { id: 1, name: 'Jan Kowalski' },
    { id: 2, name: 'Anna Nowak' },
    { id: 3, name: 'Marek Zawisza' }
];

// Przykładowe wiadomości
const messages = {
    1: [
        { sender: 'Ja', text: 'Cześć, mam pytanie dotyczące ogłoszenia.' },
        { sender: 'Jan Kowalski', text: 'Witaj! Jak mogę pomóc?' }
    ],
    2: [
        { sender: 'Ja', text: 'Witam, chciałbym dowiedzieć się więcej o mieszkaniu.' },
        { sender: 'Anna Nowak', text: 'Cześć, chętnie odpowiem na Twoje pytania.' }
    ]
};

// Inicjalizacja okna rozmowy
function startChat(userId) {
    currentChatUser = userId;
    updateChatWindow();
}

// Funkcja do aktualizacji wiadomości w oknie rozmowy
function updateChatWindow() {
    const chatWindow = document.getElementById('chatMessages');
    const selectedUser = users.find(user => user.id === currentChatUser);
    const chatHeader = document.querySelector('.chat-username');
    
    chatHeader.textContent = `Rozmowa z: ${selectedUser.name}`;
    chatWindow.innerHTML = '';
    
    // Dodanie wiadomości do okna rozmowy
    const chatMessages = messages[currentChatUser] || [];
    chatMessages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${message.sender}:</strong> ${message.text}`;
        chatWindow.appendChild(messageElement);
    });
}

// Funkcja do wysyłania wiadomości
function sendMessage() {
    const messageText = document.getElementById('messageText').value;
    if (!messageText) return;

    // Dodanie wiadomości do rozmowy
    const newMessage = { sender: 'Ja', text: messageText };
    if (!messages[currentChatUser]) {
        messages[currentChatUser] = [];
    }
    messages[currentChatUser].push(newMessage);
    
    // Odświeżenie okna rozmowy
    updateChatWindow();
    
    // Czyszczenie pola wiadomości
    document.getElementById('messageText').value = '';
}

// Początkowe ustawienie rozmowy
updateChatWindow();
