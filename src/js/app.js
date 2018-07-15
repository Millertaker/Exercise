import hamburgerMenu from './components/hamburgerMenu';
import navMenu from './components/navMenu';

(function(){
	//init app
	console.log('yo!');
	hamburgerMenu('nav-wrapper', 'masking-mobile', 'content-wrapper');
	navMenu('navigation-menu','masking');
})();

