const ch = '906788570499547139'
var h = new Date().getHours();
var m = new Date().getMinutes();

module.exports = {
	name: 'log',
	async execute(interaction, client) {
		if (interaction.channel.type == 'GUILD_TEXT') {
			await client.channels.cache.get(ch).send(`[${h}:${m}][${interaction.guild.name}(${interaction.guild.id})][${interaction.channel.name}]${interaction.user.tag} > /${client.commands.get(interaction.commandName).data.name}`);
		}
		if (interaction.channel.type == 'DM') {
            await client.channels.cache.get(ch).send(`[${h}:${m}][DM]${interaction.user.tag} > /${client.commands.get(interaction.commandName).data.name}`);
		}
	},
};