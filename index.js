require("dotenv").config();

const express = require("express");
const app = express();

const { Telegraf } = require('telegraf');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => {
  ctx.reply(`Hello ${ctx.from.first_name} Iam Nestsera Bot.`);
})

bot.help((ctx) => {
  ctx.reply('Get Channel Info');
  
  ctx.telegram.getChatMembersCount('-622487162').then(chat => console.log(chat));
})

bot.hears('scam', (ctx) => {
  
})

bot.launch();

app.listen(5000, () => {
  console.log(`server running on port 5000`);
});