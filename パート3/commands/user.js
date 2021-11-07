const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('ユーザーの情報を表示します。')
        .addUserOption(option => option.setName('ユーザー').setDescription('情報を表示したいユーザーを指定。')),
    async execute(interaction) {
        const user = interaction.options.getUser('ユーザー');
        await interaction.reply(
            `ユーザーの名前：${user.username}
            \n
            ユーザーID：${user.id}
            \n
            アバター -> [アバターURL](${user.avatarURL({ format: 'png' })})`
            );
    },
};