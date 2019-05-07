const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class schedulePage1 extends BasePage {
  template = require('./schedulePage1.hbs');

   pageWillLoad() {
    this.schedule = StorageHub.getData('schedule')[1];
    this.nav = StorageHub.getData('schedule')[2];
    const icon = require(`../../../images/schedule_art.png`)
    const home = require(`../../../images/home.png`)
    const left = require(`../../../images/${this.nav.left}`)
    const right = require(`../../../images/${this.nav.right}`)
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
