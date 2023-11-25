const owner = "seu id ";
const { PermissionsBitField } = require('discord.js');

const Discord = require("discord.js");



module.exports = {

  name: "leaveguild", 

  description: "Remover bot de algum servidor", 

  type: Discord.ApplicationCommandOptionType.ChatInput, 



  options: [

    {

        name: "id",

        description: "id do servidor que deseja remover seu bot",

        type: Discord.ApplicationCommandOptionType.String,

        required: true,

    }

],



  run: async (client, interaction) => {



    if (interaction.user.id !== `${owner}`) {

            return await interaction.reply({ content: `${interaction.user}, você precisa da permissão de **ADMINISTRADOR** para executar esta função.`, ephemeral: true });

            } else if (!interaction.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ content: `${interaction.user}, eu preciso da permissão de **ADMINISTRADOR** para executar esta função.`, ephemeral: true });



            let id = interaction.options.getString("id") 



        const guild = client.guilds.cache.get(id);

        if (guild === undefined) return interaction.reply({ content: `Seu bot não está nesse servidor.`, ephemeral: true })

        if (!guild.available) return interaction.reply({ content: `Servidor indisponível, tente novamente mais tarde.`, ephemeral: true })



        client.guilds.cache.get(id).leave()

            .then(x => {

                interaction.reply({ content: `Você me removeu do servidor \`${x.name}\``, ephemeral: true }).catch(() => { })

            })

            .catch(err => {

                console.log(`[Erro] Um erro é resolvido durante o processo: \n${err}`)

                interaction.reply(`\`\`\`js\n${err}\n\`\`\``)

            })

    }

}
