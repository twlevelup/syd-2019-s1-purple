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

  leftButtonEvent() {
     this.navigate('moodTracking');
  }

  bottomButtonEvent(){
      this.navigate('/')
    }

   pageWillLoad() {
    const happyface = require(`../../../images/happy_face.png`);
    const home = require(`../../../images/home.png`);
    const left = require(`../../../images/left.png`);
    const right = require(`../../../images/right.png`);


    this.happyface = happyface;
    this.home = home;
    this.left = left;
    this.right = right;
    }

}
// const happyEmoji = 'happyface.png';
module.exports = HappyMoodPage;
