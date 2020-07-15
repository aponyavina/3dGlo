'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import photoChange from './modules/photoChange';
import calc from './modules/calc';
import sendfForm from './modules/sendfForm';

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