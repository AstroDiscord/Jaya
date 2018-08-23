const Discord = require("discord.js");

const fs = requrire("fs");

const config = require("./data/configs/config.json");

const client = new Discord.Client();

client.on("ready", async () => {

console.log(`${client.user.id}`);

client.user.setActivity("jaya.weebly.com", {type: "LISTENING"});

client.user.setStatus("idle");

});

client.on("message", async message => {

var prefix = config.prefix;

if(!message.content.startsWith(preifx)) return;

});

client.login(config.token);