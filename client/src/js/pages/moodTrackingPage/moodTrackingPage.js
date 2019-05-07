const BasePage = require('watch-framework').BasePage;

class MoodTrackingPage extends BasePage {
  template = require('./moodTrackingPage.hbs');

   rightButtonEvent() {
    this.navigate('happyMoodPage');
  }

  leftButtonEvent() {
     this.navigate('/');
  }
}

module.exports = MoodTrackingPage;
