const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready',() => {
    console.log('起動完了');
});

client.login('トークン');