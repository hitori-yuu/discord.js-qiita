const ch = '906808703276175390';

module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {
		if (interaction.channel.type == 'GUILD_TEXT') {
			await client.channels.cache.get(ch).send({content: `[${new Date().toLocaleString()}][${interaction.guild.name}(${interaction.guild.id})][${interaction.channel.name}]${interaction.user.tag} > /${client.commands.get(interaction.commandName).data.name}`});
		}
		if (interaction.channel.type == 'DM') {
            await client.channels.cache.get(ch).send({content: `[${new Date().toLocaleString()}][DM]${interaction.user.tag} > /${client.commands.get(interaction.commandName).data.name}`});
		}
	},
};