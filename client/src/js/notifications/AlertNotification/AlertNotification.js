const BaseNotification = require("watch-framework").BaseNotification;
const NotificationHub = require("watch-framework").NotificationHub;

module.exports = class AlertNotification extends BaseNotification {
  template = require("./AlertNotification.hbs");
  pageWillLoad() {
    this.message = "Your next activity is PE Class at 11AM. Location: Gymnasium";
  }

  leftButtonEvent() {
    NotificationHub.hide();
  }
};
