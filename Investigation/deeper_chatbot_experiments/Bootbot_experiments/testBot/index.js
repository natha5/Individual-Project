'use strict';
const BootBot = require('bootbot');
const config = require('config');

const bot = new BootBot({
  accessToken: config.get('accessToken'),
  verifyToken: config.get('verifyToken'),
  appSecret: config.get('appSecret')
});


bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});


bot.hear(['hi', 'hello', 'hey'], (payload, chat) => {
  chat.say('hello there');
  });

bot.start(config.get('botPort'));
