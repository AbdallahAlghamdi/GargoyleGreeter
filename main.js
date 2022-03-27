const Discord = require('discord.js');
const gargoyleGreeter = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

require("dotenv").config()

gargoyleGreeter.on("ready",()=> 
{
    console.log(`Logged in as ${gargoyleGreeter.user.tag}`)
}

)

gargoyleGreeter.on("messageCreate", (message) =>{
if (message.content == ".talk"){
    message.reply("hello world")
    
}

}


)


gargoyleGreeter.login(process.env.TOKEN)