const Discord = require('discord.js')

module.exports.run=async (bot, message) =>{
    
    var helpa = new Discord.MessageEmbed()
        .setColor("#EECBFF")
        .setTitle("**• Help \n• Préfix : m? \n• Version : 1.0**")
        .setAuthor("Moucheron Bot" , "https://i.imgur.com/EPujwXW.png" , "https://www.youtube.com/watch?v=j8PxqgliIno&ab_channel=Rickroll%2Cbutwithadifferentlink")
        .setImage("https://tse1.mm.bing.net/th?id=OIP.28hzXnQyn696pYX6A5QTtwHaF7&pid=Api&P=0&w=205&h=165")
        .addField("__Utile (4)__" , "`verif` , `cand` , `partenariat` , `stats`")
        .addField("__Amusante (5)__" , "`ping` , `8ball` , `say` , `pof` , `ppc`")
        .addField("__Modération (4)__" , "`clear` , `ban` , `kick` , `warn`")
        .setFooter("Plus de précision avec m?help-[nom de la commande]")
        .setTimestamp()

    message.channel.send(helpa);
}

module.exports.help = {
    name: "m?help"
}