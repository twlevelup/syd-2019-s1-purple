const BasePage = require('watch-framework').BasePage;

class SadMoodPage extends BasePage {
  template = require('./sadMoodPage.hbs');
   faceButtonEvent() {
     alert("I AM UNHAPPY")
     this.navigate('/');
  }

   leftButtonEvent() {
     this.navigate('happyMoodPage');
  }

  bottomButtonEvent(){
      this.navigate('/')
    }

  pageWillLoad() {
    const sadface = require(`../../../images/sad_face.png`);
    const home = require(`../../../images/home.png`);
    const left = require(`../../../images/left.png`);
    const right = require(`../../../images/right.png`);


    this.sadface = sadface;
    this.home = home;
    this.left = left;
    this.right = right;
    }

}
// const happyEmoji = 'happyface.png';
module.exports = SadMoodPage;
