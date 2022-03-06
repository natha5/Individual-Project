'use strict';
const BootBot = require('bootbot');
const config = require('config');

const fetch = require('node-fetch');


var apiKey = '70c0a852f91b5843fd045f3787c9a5f3';
var movieRecommendation = 'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=';

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
      let id;
      //switch statement to match the genre stated to the genre ID
      switch(res) {
        case "comedy":
id = 35;
break;
        case "action":
id = 28;
break;
        case "adventure":
id = 12;
break;
        case "animation":
id = 16;
break;
        case "crime":
id = 80;
break;
        case "documentary":
id = 99;
break;
        case "drama":
id = 18;
break;
        case "family":
id = 10751;
break;
        case "fantasy":
id = 14;
break;
        case "history":
id = 36;
break;
        case "horror":
id = 27;
break;
        case "music":
id = 10402;
break;
        case "mystery":
id = 9648;
break;
        case "romance":
id = 10749;
break;
        case "science fiction":
id = 878;
break;
        case "tv movie":
id = 10770;
break;
        case "thriller":
id = 53;
break;
        case "war":
id = 10752;
break;
        case "western":
id = 37;
break;
        default:
chat.say('That is not a genre.');
      }
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
