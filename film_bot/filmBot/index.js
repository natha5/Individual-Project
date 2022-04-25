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

let genreID;
let length;
let actor;


bot.on('message', (payload, chat) => {
	const text = payload.message.text;
    console.log(`Movie data is taken from https://www.themoviedb.org/`)
	console.log(`Welcome, type genre and then the genre you would like to watch to begin`);
    console.log(`Alternatively, type "random" to get a random recommendation`, {typing:true})
});


//Random movie function
bot.hear(['random', 'Random'], (payload,chat) => {
    genreID = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 10) + Math.random();
    if(genreID!=undefined){

        //make the API request and store the response.
        fetch(movieRecommendation+genreID)
        .then(res => res.json())
        .then(json =>{

        //sends the movie title, overview and image in a facebook messenger generic template
            chat.sendGenericTemplate([{
                    title: json.results[0].original_title,
                    subtitle: json.results[0].runtime,
                    image_url:'http://image.tmdb.org/t/p/w500'+json.results[0].poster_path      
            }]);
        })
    }
});


//Main conversation/process 

//Reg expression that listens for the genre. First section adapted from Eric(2017) - https://chatbotslife.com/building-a-messenger-movie-recommendations-chatbot-in-20-minutes-or-less-d0f06ad06d4b
bot.hear(/genre (.*)/i, (payload, chat, data) => {

    //Stringify the users response
    const query =  String(data.match[1]);
       
    //convert the response to lowercase to prevent request errors
    const res = query.toLowerCase();         

    //switch statement to match the genre stated to the genre ID
    switch(res) {
        case "comedy":
            genreID = 35;
            break;
        case "action":
            genreID = 28;
            break;
        case "adventure":
            genreID = 12;
            break;
        case "animation":
            genreID = 16;
            break;
        case "crime":
            genreID = 80;
            break;
        case "documentary":
            genreID = 99;
            break;
        case "drama":
            genreID = 18;
            break;
        case "family":
            genreID = 10751;
            break;
        case "fantasy":
            genreID = 14;
            break;
        case "history":
            genreID = 36;
            break;
        case "horror":
            genreID = 27;
            break;
        case "music":
            genreID = 10402;
            break;
        case "mystery":
            genreID = 9648;
            break;
        case "romance":
            genreID = 10749;
            break;
        case "science fiction":
            genreID = 878;
            break;
        case "tv movie":
            genreID = 10770;
            break;
        case "thriller":
            genreID = 53;
            break;
        case "war":
            genreID = 10752;
            break;
        case "western":
            genreID = 37;
            break;
        default:
            chat.say('Invalid genre.');
    }
         
    //Conditional to check if the genre matched any existing genre ID
    if(genreID!=undefined){      
        const askLength = (convo) => {
                convo.ask(`What is the maximum length of film?`, 
                quickReplies: ['60', '90', '120'], (payload, convo) => {
                    const text = payload.message.text;
                    convo.set('length', text);
                    convo.say(`Ok, the length will be ${text}`).then(() => askActor(convo));
                });
            };
            const askActor = (convo) => {
                convo.ask(`What is the name of an actor/actress you enjoy watching?`,  (payload, convo) => {
                    const text = payload.message.text;
                    convo.set('actor', text);
                    convo.say(`Ok, I will look for films starring ${text}`).then(() => summary(convo));
                });
            };
            const summary = (convo) => {
                convo.say(`Searching for film`, {typing : true})
                setTimeout(() => { convo.sendGenericTemplate([{     //makes the sytem wait 2 seconds before sending message
                    title: json.results[0].original_title,
                    subtitle: json.results[0].runtime,
                    image_url:'http://image.tmdb.org/t/p/w500'+json.results[0].poster_path
                }]); }, 2000);
                convo.end();
            };
    } 
});

bot.start(config.get('botPort'));
