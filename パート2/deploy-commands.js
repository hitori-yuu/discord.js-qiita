const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const client_id  = 'クライアントのID'
const guild_id = 'サーバーのID'
const token = 'トークン'

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Pong!と返答します。'),
    new SlashCommandBuilder().setName('server').setDescription('サーバーの情報を表示します。'),
    new SlashCommandBuilder().setName('user').setDescription('ユーザーの情報を表示します。'),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(client_id, guild_id), { body: commands })
    .then(() => console.log('アプリケーションコマンドの登録に成功しました。'))
    .catch(console.error);