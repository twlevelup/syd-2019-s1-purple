const BasePage = require('watch-framework').BasePage;

class MoodTrackingPage extends BasePage {
  template = require('./moodTrackingPage.hbs');

 pageWillLoad() {
    const home = require(`../../../images/home.png`)
    const left = require(`../../../images/left.png`)
    const right = require(`../../../images/right.png`)

    this.home = home
    this.left = left
    this.right = right
    }


   rightButtonEvent() {
    this.navigate('happyMoodPage');
  }

  leftButtonEvent() {
     this.navigate('/');
  }
}

module.exports = MoodTrackingPage;
