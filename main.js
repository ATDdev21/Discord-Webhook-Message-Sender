const axios = require('axios');
const readline = require('readline');
const data = require("./data/config.json")

const webhookUrl = data.webhookUrl;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sendMessage() {
  rl.question('> ', (message) => {
    if (message === data.close_rl) {
      console.log('Exiting...');
      rl.close();
      return;
    }
    axios.post(webhookUrl, {
      content: message,
      username: data.username,
      avatar_url: data.avatar_url
    })
    .then(response => {
      sendMessage();
    })
    .catch(error => {
      console.error('Error sending message:', error);
      sendMessage();
    });
  });
}

sendMessage();
