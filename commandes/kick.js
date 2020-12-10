const Discord = require('discord.js')

module.exports.run=async (bot, message, args) =>{
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":no_entry: Tu ne possède pas les permissions requises")
        let toKick = message.mentions.members.first()
        let reason = args.slice(1).join(" ");
        if(!args[0]) return message.channel.send(":no_entry: Mentionne le membre à kick !")
        if(!toKick) return message.channel.send(`${args[0]} n'est pas un membre valide`)
        if(!reason) return message.channel.send(':no_entry: Précise la raison !')
    
        if(!toKick.kickable){
            return message.channel.send(':no_entry: Je ne peut pas kick un membre comme lui')
        }
    
        if(toKick.kickable){
            var x = new Discord.MessageEmbed()
            .setTitle('**• Kick**')
            .addField('__Membre kick__' , toKick , true)
            .addField('__Staff__' , message.author , true)
            .addField('__Raison__' , reason , true)
            .addField('__Date du kick__' , message.createdAt)
            .setColor('#EECBFF')
            .setImage('https://media.tenor.com/images/809ded859125ec690e6468346c9cbde5/tenor.gif')
    
            message.guild.channels.cache.find(c =>  c.name === "log-kick").send(x);
            bot.channels.cache.get('776838469631606794').send(x)
            toKick.kick()
        }    
}
module.exports.help = {
    name: "m?kick"
}