const SchedulePage1 = require('./schedulePage1');
const StorageHub = require('watch-framework').StorageHub;
const logoImage = require('../../../images/schedule_art.png');

describe('The Schedule1 Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render activity for right now', () => {
      const schedule = [
        { time:'11 AM', name: 'PE Class', location: 'Gymnasium', icon: 'schedule_ball.png', home: 'home.png' },
        { time: '12 PM', name: 'Art Class', location: '12B', icon: 'schedule_art.png', home: 'home.png' },
      ];
      StorageHub.setData('schedule', schedule)
      const page = new SchedulePage1();
      page.pageWillLoad();
      expect(page.render()).toContain('<h1 class="time"> 12 PM </h1>');
      expect(page.render()).toContain("12B");
    });

    describe('#rightButtonEvent', () => {
    it('goes to schedulePage', () => {
      const page = new SchedulePage1();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('schedulePage');
    });
  });
  });
});
