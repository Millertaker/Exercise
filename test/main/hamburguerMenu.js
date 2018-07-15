import common from '../common';

const options = common.options;
const assert = common.assert;

import chai from 'chai';
import {JSDOM} from 'jsdom';
import homePage from '../mocks/homePage';
import hamburgerMenu from '../../src/js/components/hamburgerMenu';


describe('Nav Exercise test', () => {  
	var dom = new JSDOM(`<!DOCTYPE html><body>${homePage}</body>`);

  global.document = dom.window.document;
  global.window = dom.window;

	hamburgerMenu('nav-wrapper', 'masking-mobile', 'content-wrapper');
  it('Hamburger menu open', () => {
    
  });
});
