const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const AlertNotification = require('../../notifications/AlertNotification/AlertNotification');
const NotificationHub = require('watch-framework').NotificationHub;
const BaseNotification = require('watch-framework').BaseNotification;

const logo = require('../../../images/logo.png');
const plop = './sounds/plop.mp3';
const smiley = require('./../../../images/smiley.png');
const sos = require('./../../../images/sos.png');
const scheduleCalendar = require('./../../../images/schedule_calendar.png');


var set = false;
var milliseconds = today + 38940000 + (Date.now() - start);
var start = new Date();
var today = new Date();
today.setHours(0,0,0,0);
var shown = false;
var fakeTime = new Date();



class HomePage extends BasePage {
  template = require('./homePage.hbs');
  pageWillLoad() {
    StorageHub.setData('contacts', [
      { name: 'Ray', phoneNumber: '0431 111 111' },
      { name: 'Sinan', phoneNumber: '0431 222 222' },
      { name: 'Jafari', phoneNumber: '0431 333 333' },
    ])

    this.updateTimeEverySecond();

    const dateTime = this.getDateTime();
    this.date = dateTime.date;
    this.time = dateTime.time.split(':')[0] + ':' + dateTime.time.split(':')[1] + ' ' + dateTime.time.split(' ')[2];

    this.logo = logo;
    this.smiley = smiley;
    this.scheduleCalendar = scheduleCalendar;
    this.sos = sos
  }

  getDateTime = () => {
    milliseconds = today.getTime() + 38990000 + (Date.now() - start);
    this.showNotification(milliseconds);

    fakeTime = new Date(milliseconds).toLocaleString('en-AU').split(",");
    console.log(fakeTime[1]);
    return {
      date: fakeTime[0],
      time: fakeTime[1]
    };
  }

  showNotification(input) {
    if(input >= today.getTime() + 39000000 && !shown) {
      NotificationHub.show('schedule', "");
      shown = true;
    }
  }

  updateTimeEverySecond() {
    setInterval(() => this.updateTimeDisplay(this.getDateTime), 1000);
  }

  updateTimeDisplay(getTime) {
    const clockTime = document.getElementById("clock-time");
    if (clockTime) {
      const {time} = getTime()
      clockTime.textContent = time.split(':')[0] + ':' + time.split(':')[1] + ' ' + time.split(' ')[2];
    }
  }

  rightButtonEvent() {
    this.navigate('moodTracking');
  }

  leftButtonEvent() {
    this.navigate('schedulePage');
  }

  topButtonEvent() {
    this.navigate('sosPage');
  }

  bottomButtonEvent() {
    // this.watchFace.scrollTop += 40;
    NotificationHub.show();
  }

}

module.exports = HomePage;
