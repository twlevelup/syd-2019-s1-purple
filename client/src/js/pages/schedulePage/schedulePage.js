const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class schedulePage extends BasePage {
  template = require('./schedulePage.hbs');

   pageWillLoad() {
    this.schedule = StorageHub.getData('schedule')[0];
    const icon = require(`../../../images/${this.schedule.icon}`)
    const home = require(`../../../images/${this.schedule.home}`)
    this.icon = icon
    this.home = home
    console.log(this)
    }

   leftButtonEvent() {
    this.navigate('schedulePage1')
  }

    rightButtonEvent(){
      this.navigate('/')
    }

    bottomButtonEvent(){
      this.navigate('/')
    }

}

module.exports = schedulePage;
