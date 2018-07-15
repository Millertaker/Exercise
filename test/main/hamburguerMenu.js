import common from '../common';

const options = common.options;
const assert = common.assert;

import chai from 'chai';
import {JSDOM} from 'jsdom';
import homePage from '../mocks/homePage';
import hamburgerMenu from '../../src/js/components/hamburgerMenu';
import simulant from 'jsdom-simulant';


describe('Nav Exercise test', () => {  
	var dom = new JSDOM(`<!DOCTYPE html><body>${homePage}</body>`);

  global.document = dom.window.document;
  global.window = dom.window;

  //event
  var clickEvent = simulant(window, 'click');
  const hamburgerMenuButton = document.getElementById('menu-toggle');

	hamburgerMenu('nav-wrapper', 'masking-mobile', 'content-wrapper');
  it('Hamburger menu open', () => {
    var navWrapper = document.getElementById('nav-wrapper');
  	simulant.fire(hamburgerMenuButton, clickEvent);

  	assert.equal(navWrapper.getAttribute("class"), 'open-mobile', 'Mobile menu has opened');
  	assert.equal(hamburgerMenuButton.getAttribute("class"), 'mobile-menu close', 'Ham menu icon has changed');
  	
  });
});
