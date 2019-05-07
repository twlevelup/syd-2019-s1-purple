const BasePage = require('watch-framework').BasePage;

class SadMoodPage extends BasePage {
  template = require('./sadMoodPage.hbs');
   faceButtonEvent() {
     alert("SAD FACE")
     this.navigate('/');
  }
 
}
// const happyEmoji = 'happyface.png';
module.exports = SadMoodPage;
