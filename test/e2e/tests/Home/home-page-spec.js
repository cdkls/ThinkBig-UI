


'use strict';

var homePage = require('../../page-objects/Home/home-page');


describe('Think Big homepage', function() {
  it('should click on products', function() {
    browser.get(browser.baseUrl+'/home');
    homePage.clickProducts();
    homePage.clickSalwars();
    expect(homePage.getClothingText()).toEqual('Clothing'); 
  });
});