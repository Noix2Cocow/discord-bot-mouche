const Discord = require('discord.js')

module.exports.run=async (bot, message, args) =>{
  if(!message.member.hasPermission('MANAGA_MESSAGE')) return message.channel.send(":no_entry: Tu n'as pas la permission requise")
  let botmessage = args.join(" ")
  message.delete().catch()
  message.channel.send(botmessage)

}

module.exports.help = {
  name: "m?say"
}