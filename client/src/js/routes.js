const HomePage = require('./pages/homePage/homePage');
const ContactsPage = require('./pages/contactsPage/contactsPage');
const TeamPage = require('./pages/teamPage/teamPage');
const FourOhFour = require('./pages/404Page/404Page');
const schedulePage = require('./pages/schedulePage/schedulePage');
const schedulePage1 = require('./pages/schedulePage/schedulePage1');
const MoodTrackingPage = require('./pages/moodTrackingPage/moodTrackingPage');
const HappyMoodPage = require('./pages/moodTrackingPage/happyMoodPage');
const SadMoodPage = require('./pages/moodTrackingPage/sadMoodPage');
const SosPage = require('./pages/sosPage/sosPage');
module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'moodTracking': MoodTrackingPage,
  'schedulePage': schedulePage,
  'happyMoodPage' : HappyMoodPage,
  'schedulePage1': schedulePage1,
  'sosPage': SosPage,
  'sadMoodPage': SadMoodPage,
};
