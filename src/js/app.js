import hamburgerMenu from './components/hamburgerMenu';
import navMenu from './components/navMenu';

(function(){
	//init app
	console.log('yo!');
	hamburgerMenu('nav-wrapper', 'masking-mobile', 'content-wrapper');

	fetch('data/nav.json')
		.then(function(response) { return response.json(); })
	  .then(function(data) {
	  	navMenu('navigation-menu','masking', data);
	  })
	  .catch(function(error) {
		  console.log('It was an error fetching the data:' + error.message);
		});

	
})();

