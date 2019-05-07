const BasePage = require('watch-framework').BasePage;

class SosPage extends BasePage {
  template = require('./sosPage.hbs');
pageWillLoad() {
navigator.geolocation.getCurrentPosition(location => {
  //TODO Write test
  alert(`Latitude: ${location.coords.latitude}\nLongitude: ${location.coords.longitude}`)
    }
  );
}
    bottomButtonEvent() {
    this.navigate('/');
  }
}
// const happyEmoji = 'happyface.png';
module.exports = SosPage;
