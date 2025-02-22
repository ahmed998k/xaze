const botToken = 'AAGMlzNkGUP9Vj6AJsog-AKOe-NDx6ok3zc';  // Replace with your bot's token
const chatId = '6105219066';      // Replace with your Telegram chat ID

// Prompt user for input
const userMessage = prompt("what is your username ?");

if (userMessage) {
    // Send the message to Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(userMessage)}`)
        .then(response => response.json())
        .then(data => console.log('Message sent:', data))
        .catch(error => console.error('Error:', error));
} else {
    console.log('No message entered.');
}