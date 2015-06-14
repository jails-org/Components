define([

	'jails'

], function( jails ){

	return jails.component('hello-world', function(element, anno){

		var cp = this, answers;

		this.init = function(){

			answers = get_answers();
			this.greetings();
		};

		this.greetings = function(){
			speak('Helloooo! Welcome to Jails!');
		};

		this.answer = function(qstn){
			speak( answers[qstn] || answers.nothing );
		};

		function speak(msg){
			element.html(msg);
		}

		function get_answers(){

			return{
				how 	:'I am fine! Thank you',
				today	:new Date().toUTCString(),
				start	:'Please visit: <a href="http://jails-org.github.io/Jails/docs/#/">Jails reference</a>',
				bye		:'Bye bye',
				nothing	:'Oh.. Ok'
			};
		}

	});
});
