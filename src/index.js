'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import scroll from './modules/scroll';
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import photoChange from './modules/photoChange';
import calc from './modules/calc';
import sendfForm from './modules/sendfForm';

//Scroll
scroll();

//Timer
countTimer('03 september 2020');

//Menu
toggleMenu();

//Popup
togglePopUp();

//Tabs
tabs();

//Slider
slider();

//Team-photo-change
photoChange();

//calc 
calc(100);

// send-ajax-form
sendfForm();