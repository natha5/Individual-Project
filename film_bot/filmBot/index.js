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
  chat.say(`Hello, what genre of film would you like to watch?`);
});



bot.hear('message', (payload, chat) => {

	const askGenre = (convo) => {
		convo.ask(`What film genre would you like to watch?`, (payload, convo) => {
			const text = payload.message.text;
			convo.set('genre', text);
			convo.say(`Ok, the genre will be ${text}`).then(() => askFavoriteFood(convo));
		});
	};
  const askLength = (convo) => {
		convo.ask(`How long do you want the film to be at most (in minutes)?`, (payload, convo) => {
			const text = payload.message.text;
			convo.set('length', text);
			convo.say(`Got it, the film will be no longer than ${text}`).then(() => sendSummary(convo));
		});
	};

});
bot.start(config.get('botPort'));
