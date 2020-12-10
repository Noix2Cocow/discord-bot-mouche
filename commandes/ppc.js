const Discord = require('discord.js')

module.exports.run=async (bot, message, args) =>{
  if(!args[0]) return message.channel.send(':no_entry: Choisis pierre , papier ou ciseau!')
  var ball = [
    //oui
    "Ciseaux",
    "Papier",
    "Pierre",
];
var ansball = ball[Math.floor(Math.random() * ball.length)];
var ball_embed = new Discord.MessageEmbed()
    .setColor("#EECBFF")
    .setTitle('**• Pierre.. papier.. ciseau !**')
    .addField(`Ma main`, ansball)
    .setTimestamp()
message.channel.send(ball_embed);
}

module.exports.help = {
  name: "m?ppc"
}