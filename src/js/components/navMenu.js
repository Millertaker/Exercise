const navMenu = function(selector, mask){
	var menu = document.querySelector(`.${selector}`);
	var linksLv1 = menu.querySelectorAll('.first-level');	
	var mask = document.getElementById(mask);
	var lastClicked;

	var setupEvents = function() {
		linksLv1.forEach(item => { item.addEventListener('click', onClickLv1 )} );
	}

	var onClickLv1 = function(e) {
		var parent = this.parentElement;
		if(!parent.querySelector('.sub-nav-element')){
			return;
		}

		mask.classList.add('display');
		mask.addEventListener('click', closeMenu);
		linksLv1.forEach(item => clearMenu(item));
		
		//for desktop
		if(parent.querySelector('.sub-nav-element')){
			parent.classList.add('open');
			parent.querySelector('.sub-nav-element').classList.add('display');	
		}

		//mobile
		if(lastClicked === this && this.closest('.open-mobile')){
			parent.classList.remove('open');
			parent.querySelector('.sub-nav-element').classList.remove('display');
			lastClicked = null;
		} else {
			lastClicked = this;
		}
	}

	var closeMenu = function(e) {
		mask.classList.remove('display');
		linksLv1.forEach(item => clearMenu(item));
	}

	var clearMenu = function(item) {
		item.parentElement.classList.remove('open');
		var subMenus = item.parentElement.querySelectorAll('.sub-nav-element');

		subMenus.forEach(subMenu => {subMenu.classList.remove('display')});
	}

	var init = function(){
		setupEvents();
	}

	init();
}

export default navMenu;