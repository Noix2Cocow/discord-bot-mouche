const Discord = require('discord.js')

module.exports.run=async (bot, message, args) =>{
    message.delete()
        if(message.member.hasPermission("MANAGE_MESSAGES")){
            
            if(args[0]){
                if(!isNaN(args[0]) && args[0] >= 1 && args[0] <= 99){
                    message.channel.bulkDelete(args[0])
                    var clear = new Discord.MessageEmbed()
                        .setColor("#EECBFF")
                        .addField(`:boom: Vous avez fait exploser ** ${args[0]} **message(s)` , "Bravo commandant" , false)
                        .setTimestamp()
                        .setImage('https://media.tenor.com/images/04dc5750f44e6d94c0a9f8eb8abf5421/tenor.gif')
                    message.channel.send(clear)
                }

                else{
                    var sad = new Discord.MessageEmbed()
                        .setColor("#EECBFF")
                        .addField(`:no_entry: Vous devez indiquer un chiffre entre **1** et **99** pour faire exploser les messages` , "Merci" , false)
                        .setTimestamp()
                        .setImage('https://media.tenor.com/images/c3f0b2ce02489b7a64d0c51ec92f02d5/tenor.gif')
                    message.channel.send(sad)
                }
            }

            else{
                var nope = new Discord.MessageEmbed()
                    .setColor("#EECBFF")
                    .addField(`:no_entry: Veuillez indiquer une nombre après le "m?clear"` , "Merci" , false)
                    .setTimestamp()
                    .setImage('https://media.tenor.com/images/c3f0b2ce02489b7a64d0c51ec92f02d5/tenor.gif')
                message.channel.send(nope)
            }
        }

        else{
            message.channel.send(`:no_entry: Vous devez avoir la permission de gérer les messages pour éxécuter cette commande !`)
        }
}

module.exports.help = {
    name: "m?clear"
}
