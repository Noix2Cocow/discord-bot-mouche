const Discord = require('discord.js')

module.exports.run=async (bot, message) =>{
    var help3 = new Discord.MessageEmbed()
        .setColor("#EECBFF")
        .setTitle("**• Help**")
        .addField("__m?partenariat__" , 'Comment réalisé un partenariat')
        .setImage("https://tse1.mm.bing.net/th?id=OIP.28hzXnQyn696pYX6A5QTtwHaF7&pid=Api&P=0&w=205&h=165")
        .setTimestamp()

    message.channel.send(help3);
}

module.exports.help = {
    name: "m?help-partenariat"
}