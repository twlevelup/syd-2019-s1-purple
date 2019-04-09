const BasePage = require('watch-framework').BasePage;

class MoodTrackingPage extends BasePage {
  template = require('./moodTrackingPage.hbs');

   rightButtonEvent() {
    this.navigate('happyMood');
  }
}

module.exports = MoodTrackingPage;
