// index.js
'use strict';
const BootBot = require('bootbot');


// used to work with fb messenger page / app
const bot = new BootBot({
  accessToken: 'EAAIoAikO1IQBAFfeXptbyrF0yD4emPGXuAfZBVpv7pLu4MGwlrcx9bpTWqPdaG5LrOqLB1jpOQUk4IrDHlH4WgQ5kfpnSxLiKZARZCwvluf3H7QsAHRiZAWIlotdhOEnfvlVwyuas8FBYUUHHdS4MDO623kWipmECWZAmaEiR3X4soAE83QtdANZB9IEuk6JevYJ7T3QSwPAZDZD',
  verifyToken: 'EAAIoAikO1IQBAFfeXptbyrF0yD4emPGXuAfZBVpv7pLu4MGwlrcx9bpTWqPdaG5LrOqLB1jpOQUk4IrDHlH4WgQ5kfpnSxLiKZARZCwvluf3H7QsAHRiZAWIlotdhOEnfvlVwyuas8FBYUUHHdS4MDO623kWipmECWZAmaEiR3X4soAE83QtdANZB9IEuk6JevYJ7T3QSwPAZDZD',
  appSecret: '881aaf2f2a0af25f46a66ac196da1b21'
});

bot.hear(['hello', 'hi', /hey( there)?/i], (payload, chat) => {
	
	chat.say('Hello, human friend!').then(() => {
		chat.say('How are you today?', { typing: true });
	});
});



bot.start();