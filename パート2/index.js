const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready',() => {
    console.log('起動完了');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'server') {
        await interaction.reply('サーバーの情報...');
    } else if (commandName === 'user') {
        await interaction.reply('ユーザーの情報...');
    }
});

client.login('トークン');