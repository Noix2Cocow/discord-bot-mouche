const Discord = require('discord.js')

module.exports.run=async (bot, message) =>{

    var part = new Discord.MessageEmbed()
        .setColor("#EECBFF")
        .setTitle("**• Critères pour un partenariat**")
        .setAuthor("Moucheron Bot" , "https://i.imgur.com/EPujwXW.png")
        .setThumbnail("https://i.imgur.com/EPujwXW.png")
        .addField("__Nombre de membres__" , 'La mention utilisé lors du partenariat dépendra du nombre de vos membres sur votre serveur \n - Moin de 200 membres le ping utilisé sera le ping de notif \n - 200 ou plus le ping utilisé sera "everyone"')
        .addField("__Activité__" , "Pour réalisé un partenariat avec nous , il faudra que celui ci soit actif , si celui ci ne l'est pas , le partenariat sera refusé")
        .addField("__Si vous devenez partenaire__" , "SI vous effectuez un partenariat avec nous , vous obtiendrais le rôle @📍 | Partenaire et vous devez obligatoirement rester sur le serveur sinon , nous nous reservons le droit de suprrimé votre pub")
        .addField("__Comment procéder ?__" , "Si vous possédez tout les critères énoncés plus haut , un partenariat pourra donc être effectué. Contactez <@348408904352268289> dans ses MP et envoyez lui une description brève mais complète de votre serveur")
        .addField("__Si votre serveur...__" , "Le staff se réservant tous droit de dérogé aux règles énoncées en renonçant à un partenariat qu'il ne juge pas intéressant , bénéfiquement ou sain ou en acceptant un serveur ne possédant pas tous les critères.")
        .setImage("https://media.tenor.com/images/009f16a2c915d90598f9ae1d3b1ab768/tenor.gif")
        .setTimestamp()

    message.channel.send(part);
}

module.exports.help = {
    name: "m?partenariat"
}