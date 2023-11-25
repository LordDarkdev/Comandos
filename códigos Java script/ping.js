

const Discord = require('discord.js')

Module.exports = {
name: "Ping",
run: async (client, message) = {
let embedping = new Discord.EmbedBuilder()
.setColor("ff0000")
.setDescription(`${message.author} Pong! ${client.ws.ping}ms`)

message.reply({embeds: [embedping]})
}
}


