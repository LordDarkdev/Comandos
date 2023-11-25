
module.exports = {
    name: "ping",
    description: "Check the response status of the bot.",
    run: async(client, interaction) => {

        await interaction.reply({
            content: `🏓 • Pong! ${client.ws.ping}ms.`
        })

    }
} 
