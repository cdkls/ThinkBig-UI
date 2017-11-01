'use strict';

var objects = require("./home-page-objects");

var homePage = {

  clickProducts: function() {
    var field = element.all(objects.clickProducts).get(0);
    field.click();
    browser.sleep(1000);
    return homePage;
  },
  
  clickSalwars: function() {
	    var field = element(objects.clickSalwars);
	    field.click();
	    browser.sleep(1000);
	    return homePage;
	  },
	  
	   getClothingText : function(){
		 return element(objects.clothing).getText(); ;
		  
	  },

  submit : function() {
      element(objects.submitButton).click();
      browser.waitForAngular();
      promoCalendarPage.periodDatesDisplayed();
      return homePage;
  }
};

module.exports = homePage;
