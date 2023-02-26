# Discord Webhook Message Sender

Sends messages from the terminal/console to a Discord Webhook in Node.js.

## Installation

Make sure you have Node.js v18.14.2 or higher installed.
If not, you can install it [here](https://nodejs.org/en/)

Run `npm i` in the root folder to install the packages that are needed.

## Usage

To create a Discord Webhook, go to "Server Settings", "Intergrations", "Webhooks". Click "New Webhook", select it, change the channel to whatever you want it to be and click "Copy Webhook URL".

In the `config.json`, paste the copied Webhook URL in `"webhookUrl here"`. Also make sure that you have a link to an avatar set in `"avatar_url here"`, and that you have chosen a username in `"username here"`. 

The purpose of `"close_rl"` is ending the process, you can replace `"end_process"` with anything to your liking. When this is sent in the terminal/console, it will not be send to the Webhook.

In the terminal/console, run `node main.js`. After that, you can type in any message and it will be sent to the Webhook.