const BasePage = require('watch-framework').BasePage;

class DemoPage extends BasePage {
  template = require('./demoPage.hbs');
}

module.exports = DemoPage;
