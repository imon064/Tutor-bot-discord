require('dotenv').config();

const { Client, GatewayIntentBits, Message } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', ()=>{
    console.log(`logged in as ${client.user.tag}`);
})

client.on('messageCreate',(message)=>{
    if(message.author.bot === true) return;
    console.log(`[${message.author.tag}] : ${message.content}`);
    if (message.content === 'hello'){
        message.channel.send('hello');
    }
})

client.login(process.env.DISCORD_BOT_TUTOR_TOKEN)
  .catch(err => console.error("Login failed:", err));