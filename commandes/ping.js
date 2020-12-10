const Discord = require('discord.js')

module.exports.run=async (bot, message) =>{
    message.channel.send(":ping_pong: pong")
}
module.exports.help = {
    name: "m?ping"
}