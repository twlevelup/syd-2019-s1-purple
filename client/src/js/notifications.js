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
  },
  {
    type: "schedule",
    label: "Schedule Alert",
    defaultValue: "Your next activity is PE Class at 11AM.",
    view: AlertNotification,
  }
];


module.exports = notifications;
