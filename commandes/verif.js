const Discord = require('discord.js')

module.exports.run=async (bot, message) =>{
    var embed = new Discord.MessageEmbed()
        .setColor("#EECBFF")
        .setTitle("**• Vérification**")
        .setAuthor("Moucheron Bot" , "https://i.imgur.com/EPujwXW.png")
        .setDescription("Comment la réaliser ?")
        .setThumbnail("https://i.imgur.com/EPujwXW.png")
        .addField("__Première étape__" , "**Ecrire votre pseudo sur un papier**" , false)
        .addField("__Deuxième étape__" , "**Prendre ce même papier et prenez une photo de vous avec**" , false)
        .addField("__Troisième étape__" , "**Envoyer votre photo a l'un des deux 'Tapette a mouche' en MP**")
        .addField("__Solution alternative__" , "Si vous ne voulez pas montré votre tête , venir en vocale avec un membre du staff et parler avec peut vous faire passer la vérif juste en parlant")
        .addField("__Conditions n°1__" , "**Ne cacher pas votre tête (la photo sera supprimé juste après**" , true)
        .addField("__Condition n°2__" , "**Ne pas utiliser une filtre qui cache entièrement votre visage**" , true)
        .setImage("https://media.tenor.com/images/8a9794dc1be9fe53fed2e6023ce17e23/tenor.gif")
        .setTimestamp()

    message.channel.send(embed);
}

module.exports.help = {
    name: "m?verif"
}
