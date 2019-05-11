const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../../images/logo.png');
const plop = './sounds/plop.mp3';
const smiley = require('./../../../images/smiley.png')
const sos = require('./../../../images/sos.png')
const scheduleCalendar = require('./../../../images/schedule_calendar.png')
var set = false;
var milliseconds = today + 38940000 + (Date.now() - start);
var start = new Date();
var today = new Date();
today.setHours(0,0,0,0);
var fakeTime = new Date();
//test for raspberrypi
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
    this.time = dateTime.time + (24 - dateTime.date + '10:49:00');
    this.logo = logo;
    this.smiley = smiley;
    this.scheduleCalendar = scheduleCalendar;
    this.sos = sos
  }

  getDateTime() {
    // 38940000 = 10:49:00
    // 1557535740000 = 11 May 2019 10:49:00
    milliseconds = today.getTime() + 38940000 + (Date.now() - start);
    fakeTime =  new Date(milliseconds).toLocaleString('en-AU').split(",");
    return {
      date: fakeTime[0],
      time: fakeTime[1]
    };
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
    this.watchFace.scrollTop += 40;
  }

}

module.exports = HomePage;
