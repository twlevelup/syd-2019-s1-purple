const SchedulePage = require('./schedulePage');
const StorageHub = require('watch-framework').StorageHub;
const logoImage = require('../../../images/schedule_ball.png');

describe('The Schedule Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render activity for right now', () => {
      const schedule = [
        { time:'11 AM', name: 'PE Class', location: 'Gymnasium', icon: 'schedule_ball.png', home: 'home.png' },
      ];
      StorageHub.setData('schedule', schedule)
      const page = new SchedulePage();
      page.pageWillLoad();
      expect(page.render()).toContain('<h1 class="time"> 11 AM </h1>');
      expect(page.render()).toContain("Gymnasium");
    });
  });
});
