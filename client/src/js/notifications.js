const AlertNotification = require('./notifications/AlertNotification/AlertNotification');
//Milo - test
const notifications = [
  {
    type: "alert",
    label: "Alert",
    defaultValue: "This is a test alert",
    view: AlertNotification,
  },
  {
    type: "base",
    label: "Base",
    defaultValue: "This is a test base notification",
  }
];


module.exports = notifications;
