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
        { name: 'PE Class', location: 'Gymnasium', icon: 'schedule_ball.png' },
      ];
      StorageHub.setData('schedule', schedule)
      const page = new SchedulePage();
      page.pageWillLoad();
      expect(page.render()).toContain('<h1 class="right-now"> Right now </h1>');
      expect(page.render()).toContain("<div>Gymnasium</div>");
      // expect(page.render().getElementsByTag("img").prop("src")).toEqual(logoImage)
    });
  });
});
