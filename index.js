//Constante
const Discord = require ("discord.js");
const { fstat } = require("fs");
const bot = new Discord.Client;
const bdd = require("./bdd.json")
const fs = require('fs')
bot.commands = new Discord.Collection()

const config = require('./config.json');

fs.readdir('./commandes/' , (err , files) => {
    if(err) console.log(err)
    console.log(`${files.length} commandes`)
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.lenght <= 0){
        console.log('Commande non trouvé')
        return
    }

    jsfile.forEach((f ,i) => {
        let props = require(`./commandes/${f}`)
        bot.commands.set(props.help.name, props)
    })
})

//Statut du bot
bot.on("ready" , () => {
    bot.channels.cache.get('771534619119976470').send("Je suis co les bg")
    console.log('Je suis co')
    bot.user.setActivity('m?help')
});

//Message de bienvenue
bot.on("guildMemberAdd" , member => {
    var bienvenue = new Discord.MessageEmbed()
        .setColor("#ff0909")
        .addField('Bienvenue à toi ', `${member} !` , false)
        .setTimestamp()
        .setImage('https://media.tenor.com/images/408866348c81c86db4c33a6daff2e6eb/tenor.gif')

    bot.channels.cache.get('730530293278310453').send(bienvenue)
})

//Message de bye
bot.on("guildMemberRemove" , member => {
    var bye = new Discord.MessageEmbed()
        .setColor("#e8ea4f")
        .addField("Un membre nous as quitté...", `${member.user.username}...pourquoi ?` , false)
        .setTimestamp()
        .setImage('https://media.tenor.com/images/e53aeaa885c715a022d1535c3f1a3e0b/tenor.gif')

    bot.channels.cache.get('730530293278310453').send(bye)
})

//Commande
bot.on("message" , async message => {

    bot.emit('checkMessage' , message)

    let prefix =  config.prefix
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let Args = messageArray.slice(1)
    var args = message.content.substring(prefix.lenght).split(" ")

    let commandFile = bot.commands.get(cmd.slice(prefix.lenght))
    if(commandFile) commandFile.run(bot, message, Args, args)

    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
})

//Bdd
function Savebdd(){
    fs.writeFile("./bdd.json" , JSON.stringify(bdd, null, 4), (err) => {
        if(err) message.channel.send("Une erreur est si vite arrivée")
    });
}


bot.login(config.token)
