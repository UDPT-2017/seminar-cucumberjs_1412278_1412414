// features/step_definitions/browser_steps.js
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then, setDefaultTimeout}) {
  setDefaultTimeout(6000000);
  Given('I am on the home page', function() {
    return this.driver.get('https://localhost:3000');
  });

  When('I click on {stringInDoubleQuotes}', function (text) {
    return this.driver.findElement({linkText: text}).then(function(element) {
      return element.click();
    });
  });

  Then('I should see Album page', function () {
    return this.driver.get('https://localhost:3000/Album');

  });
});
