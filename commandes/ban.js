const Discord = require('discord.js')

module.exports.run=async (bot, message, args) =>{
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry: Tu ne possède pas les permissions requises")
        let toBan = message.mentions.members.first()
        let reason = args.slice(1).join(" ");
        if(!args[0]) return message.channel.send(":no_entry: Mentionne le membre à ban !")
        if(!toBan) return message.channel.send(`${args[0]} n'est pas un membre valide`)
        if(!reason) return message.channel.send(':no_entry: Précise la raison !')

        if(!toBan.bannable){
            return message.channel.send(':no_entry: Je ne peut pas bannir un membre comme lui')
        }

        if(toBan.bannable){
            var y = new Discord.MessageEmbed()
            .setTitle('**• Ban**')
            .addField('__Membre ban__' , toBan , true)
            .addField('__Staff__' , message.author , true)
            .addField('__Raison__' , reason , true)
            .addField('__Date du Ban__' , message.createdAt)
            .setColor('#EECBFF')
            .setImage('https://media.tenor.com/images/0f319dc32498a2b98f1b95519d8a6c1d/tenor.gif')

            message.guild.channels.cache.find(c =>  c.name === "log-ban").send(y)
            bot.channels.cache.get('776838469631606794').send(y)
            toBan.ban()
        }
}
module.exports.help = {
    name: "m?ban"
}
