const Discord = require('discord.js')

module.exports.run=async (bot, message, args, config) =>{
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: Tu ne possède pas les permissions requises")

    var user = message.mentions.users.first()
    if(!user) return message.channel.send(":no_entry: Vous devez mentionné un membre !")

    var member 

    try{
        member = await message.guild.members.fetch(user)
    } catch(err) {
        member = null
    }

    if(!member) return message.channel.send(":no_entry: Ce membre n'existe pas !")

    var raison = args.splice(1).join(' ')
    if(!raison) return message.channel.send(":no_entry: Vous devez précisez la raison")

    var channel = message.guild.channels.cache.find(c => c.name === "general")

    var log = new Discord.MessageEmbed()
    .setTitle("**• Warn**")
    .addField("Membre :" , user)
    .addField('Modérateur :' , message.author)
    .addField('Raison :' , raison)
    .setTimestamp()
    .setColor("#EECBFF")
    bot.channels.cache.get('776838469631606794').send(log)

    var log2 = new Discord.MessageEmbed()
    .setTitle("**• Warn**")
    .addField("Membre :" , user)
    .addField('Modérateur :' , message.author)
    .addField('Raison :' , raison)
    .setTimestamp()
    .setColor("#EECBFF")
    message.guild.channels.cache.find(c =>  c.name === "log-warn").send(log2)

    var embed = new Discord.MessageEmbed()

    .setTitle("• Tu viens d'être Warn")
    .addField("Raison" , raison)
    .setTimestamp()
    .setColor("#EECBFF")

    try {
        user.send(embed)
    } catch(err) {
        console.warn(err)
    }

    message.channel.send(`**${user}** viens d'être warn par **${message.author}**`)
}
module.exports.help = {
    name: "m?warn"
}