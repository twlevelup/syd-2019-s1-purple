const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class schedulePage1 extends BasePage {
  template = require('./schedulePage1.hbs');

   pageWillLoad() {
    this.schedule = StorageHub.getData('schedule')[1];
    const icon = require(`../../../images/${this.schedule.icon}`)
    const home = require(`../../../images/home.png`)
    const left = require(`../../../images/left.png`)
    const right = require(`../../../images/right.png`)
    this.icon = icon
    this.home = home
    this.left = left
    this.right = right
    console.log(this)
    }

    rightButtonEvent(){
      this.navigate('schedulePage')
    }
    bottomButtonEvent(){
      this.navigate('/')
    }

}

module.exports = schedulePage1;
