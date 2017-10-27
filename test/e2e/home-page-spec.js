describe('Think Big homepage', function() {
  it('should click on products', function() {
    browser.get(browser.baseUrl+'/home');
    element.all(by.css('.modal button.close')).get(0).click();
    browser.sleep(1000);
    element.all(by.className('caret')).get(0).click();
    browser.sleep(1000);
    expect(element(by.id('clothing')).getText()).toEqual('Clothing');
    browser.sleep(1000);
    element(by.cssContainingText('[href*="salwars.html"]', 'Salwars')).click();
   
   // var todoList = element.all(by.repeater('todo in todoList.todos'));
    //expect(todoList.count()).toEqual(3);

  
  
  });
});