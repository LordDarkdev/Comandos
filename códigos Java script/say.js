const Discord = require("discord.js");
module.exports = {
  name: "say",
  run: async (client, message, args) => {

    const sayMessage = args.join(" ");
     
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);

    
    
  }

}



