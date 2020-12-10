const Discord = require('discord.js')

module.exports.run=async (bot, message, args) =>{
  if(!args[0]) return message.channel.send(':no_entry: Pose moi une question !')
  var ball = [
    //oui
    "Oui",
    "Je suis d'accord",
    "Tu as raison",

    //non
    "Non",
    "Tu as tord",
    "Je sais pas qui vous as dit ça , mais c'est faux",
    "Je dirais que non",

    //autres
    "Oulah...repose moi la question plus tard",
    "Tu me pose trop de question , ressaie plus tard"
];
var ansball = ball[Math.floor(Math.random() * ball.length)];
var ball_embed = new Discord.MessageEmbed()
    .setColor("#EECBFF")
    .setTitle('**• 8ball**')
    .addField(`Ma réponse`, ansball)
    .setTimestamp()
message.channel.send(ball_embed);
}

module.exports.help = {
  name: "m?8ball"
}