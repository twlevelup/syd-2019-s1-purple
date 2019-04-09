const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class schedulePage extends BasePage {
  template = require('./schedulePage.hbs');

   pageWillLoad() {
    this.schedule = StorageHub.getData('schedule')[0];
    const icon = require(`../../../images/${this.schedule.icon}`)
    this.icon = icon
    }

}

module.exports = schedulePage;
