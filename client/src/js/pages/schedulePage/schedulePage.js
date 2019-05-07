const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class schedulePage extends BasePage {
  template = require('./schedulePage.hbs');

   pageWillLoad() {
    this.schedule = StorageHub.getData('schedule')[0];
    this.nav = StorageHub.getData('schedule')[2];
    const icon = require(`../../../images/${this.schedule.icon}`)
    const home = require(`../../../images/${this.schedule.home}`)
    const left = require(`../../../images/${this.nav.left}`)
    const right = require(`../../../images/${this.nav.right}`)

    this.icon = icon
    this.home = home
    this.left = left
    this.right = right
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
