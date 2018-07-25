const navMenu = function(selector, mask, data){
	var menu = document.querySelector(`.${selector}`);
	var linksLv1 = menu.querySelectorAll('.first-level');	
	var mask = document.getElementById(mask);
	var lastClicked;
	var templateMenuLv1 = `<li class="nav-element sub-menu">
            <a class="first-level" href="_url_">_label_</a>
            	_lv2_
         		</li>`;
	var templateMenuLv2 = `<ul class="sub-nav-element">
               						_items_
            						</ul>`;
	var templateMenuItemLv2 = `<li><a class="second-level" href="_url_">_label_</li>`;


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

	var setupMenu = function() {
		var menuDom = menu.querySelector('.mobile-container');
		var items = data.items; 
		var menuContent = ``;
		for(var i in items) {
			var buffer = '';
			buffer = templateMenuLv1.replace('_label_', items[i].label);
			buffer = buffer.replace('_url_', items[i].url);
			
			if(items[i].items.length > 0){
				buffer = buffer.replace('_lv2_', '');
			} else {
				buffer = buffer.replace('_lv2_', '');
			}

			menuContent += buffer;

		}

		menuDom.innerHTML = menuContent;

		console.log(menuContent);

	}

	var init = function(){
		setupMenu();
		setupEvents();
	}

	init();
}

export default navMenu;