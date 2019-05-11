const BaseNotification = require("watch-framework").BaseNotification;
const NotificationHub = require("watch-framework").NotificationHub;

module.exports = class AlertNotification extends BaseNotification {
  template = require("./AlertNotification.hbs");
  pageWillLoad() {
    this.time = "11 AM";
    this.name = "PE Class";
    this.location = "Gymnasium";
  }

  leftButtonEvent() {
    NotificationHub.hide();
  }
};
