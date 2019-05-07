const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../../images/logo.png');
const plop = './sounds/plop.mp3';
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
      clockTime.textContent = getTime().time;
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

   faceButtonEvent() {
    this.navigate('demo');
  }
}

module.exports = HomePage;
