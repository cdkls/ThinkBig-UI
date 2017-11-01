'use strict';

var homePageObjects = {
  clickProducts: by.className('caret'),
  
  clickSalwars : by.cssContainingText('[href*="salwars.html"]', 'Salwars'),
  
  clothing : by.id('clothing'),
  
  selectOption : by.tagName('option'),
  
  submitButton : by.css(".submit-filter")
};

module.exports = homePageObjects;