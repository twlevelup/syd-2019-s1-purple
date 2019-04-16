const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class schedulePage1 extends BasePage {
  template = require('./schedulePage1.hbs');

   pageWillLoad() {
    this.schedule = StorageHub.getData('schedule')[1];
    const icon = require(`../../../images/schedule_art.png`)
    const home = require(`../../../images/home.png`)
    this.icon = icon
    this.home = home
    console.log(this)
    }



}

module.exports = schedulePage1;
