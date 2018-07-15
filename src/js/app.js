import hamburgerMenu from './components/hamburgerMenu';
import navMenu from './components/navMenu';

(function(){
	//init app
	console.log('yo!');
	hamburgerMenu('nav-wrapper', 'translucent-mask-mobile', 'content-wrapper');
	navMenu('navigation-menu','translucent-mask');
})();

