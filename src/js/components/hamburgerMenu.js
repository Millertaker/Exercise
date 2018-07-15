
const hamburgerMenu = function(selector, mask, contentWrapper){
	var container = document.getElementById(selector);
	var el = container.querySelector('.mobile-menu');
	var mask = document.getElementById(mask);
	var contentWrapper = document.querySelector(`.${contentWrapper}`);

	var init = function(){
		setupEvents();
	}

	var setupEvents = function() {
		el.addEventListener('click', onClick);
		mask.addEventListener('click', closeMenu);
	}

	var openMenu = function() {
		container.classList.add('open-mobile')
		el.classList.add('close');
		mask.classList.add('display');
		contentWrapper.classList.add('moved-to-left');
	}

	var closeMenu = function() {
		container.classList.remove('open-mobile');
		el.classList.remove('close');
		mask.classList.remove('display');
		contentWrapper.classList.remove('moved-to-left');
	}

	var onClick = function(e) {
		!container.classList.contains('open-mobile') ? openMenu() : closeMenu();
	}	

	init();
}

export default hamburgerMenu;