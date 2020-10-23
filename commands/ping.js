const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
if (args.length  < 1) return message.reply("You must supply a Guild ID");
client.guilds.get(args.join(" ")).leave()
.then(g => console.log(`Left the guild ${g}`)) .catch(console.error);
  
}

module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping"
}