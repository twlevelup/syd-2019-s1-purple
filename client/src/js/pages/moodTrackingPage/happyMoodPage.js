const BasePage = require('watch-framework').BasePage;

class HappyMoodPage extends BasePage {
  template = require('./happyMoodPage.hbs');
   faceButtonEvent() {
     alert("HAPPY FACE")
     this.navigate('/');
  }
   rightButtonEvent() {
     this.navigate('sadMoodPage');
  }
}
// const happyEmoji = 'happyface.png';
module.exports = HappyMoodPage;
