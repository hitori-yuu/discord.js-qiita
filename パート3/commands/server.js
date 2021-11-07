const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('サーバーの情報を表示します。'),
    async execute(interaction) {
        const server = interaction.guild;
        await interaction.reply(
            `サーバーの名前：${server.name}\nメンバー数：${server.memberCount}\nサーバーアイコン -> ${server.iconURL({ format: 'png' })}`
        );
    },
};