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
	console.log(`Welcome, type the genre you would like to watch to begin`);
        console.log(`Alternatively, type "random" to get a random recommendation`,{typing:true})
});

bot.hear(['random', 'Random'], (payload,chat) => {
        const id = Math.floor(Math.random() * 1000);
        if(id!=undefined){

                //make the API request and store the response.
                fetch(movieRecommendation+id)
                .then(res => res.json())
                .then(json =>{
            
            
                    //sends the movie title, overview and image in a facebook messenger generic template
                        chat.sendGenericTemplate([{
                        title: json.results[0].original_title,
                        subtitle: json.results[0].overview,
                        image_url:'http://image.tmdb.org/t/p/w500'+json.results[0].poster_path      
                  }]);
            
                
})



bot.start(config.get('botPort'));
