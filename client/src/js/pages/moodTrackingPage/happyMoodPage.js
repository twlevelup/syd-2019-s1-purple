const BasePage = require('watch-framework').BasePage;

class HappyMoodPage extends BasePage {
  template = require('./happyMoodPage.hbs');

   faceButtonEvent() {
    this.navigate('/');
  }
}
// const happyEmoji = 'happyface.png';
module.exports = HappyMoodPage;
