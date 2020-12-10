const Discord = require('discord.js')

module.exports.run=async (bot, message, args) =>{
  var ball = [
    //oui
    "Pile",
    "Face",
];
var ansp = ball[Math.floor(Math.random() * ball.length)];
var p_embed = new Discord.MessageEmbed()
    .setColor("#EECBFF")
    .setTitle('**• Pile ou face**')
    .addField(`La pièce`, ansp)
    .setTimestamp()
message.channel.send(p_embed);
}

module.exports.help = {
  name: "m?pof"
}