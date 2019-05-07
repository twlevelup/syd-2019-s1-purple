const BasePage = require('watch-framework').BasePage;

class SadMoodPage extends BasePage {
  template = require('./sadMoodPage.hbs');
   faceButtonEvent() {
     alert("SAD FACE")
     this.navigate('/');
  }

   leftButtonEvent() {
     this.navigate('happyMoodPage');
  }

}
// const happyEmoji = 'happyface.png';
module.exports = SadMoodPage;
