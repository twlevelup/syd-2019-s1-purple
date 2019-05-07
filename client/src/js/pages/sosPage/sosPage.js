const BasePage = require('watch-framework').BasePage;

class SosPage extends BasePage {
  template = require('./sosPage.hbs');
pageWillLoad() {
navigator.geolocation.getCurrentPosition(location => {
  //TODO Write test
  console.log('Latitude: ', location.coords.latitude)
  console.log('Longitude: ', location.coords.longitude)
    }
  );
}
    bottomButtonEvent() {
    this.navigate('/');
  }
}
// const happyEmoji = 'happyface.png';
module.exports = SosPage;
