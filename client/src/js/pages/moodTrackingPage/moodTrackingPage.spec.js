const MoodTrackingPage = require('./moodTrackingPage');

describe('The Mood Tracking Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new MoodTrackingPage();
      expect(page.render()).toMatch(/How are/);
    });
  });

  describe('#leftButtonEvent', () => {
    it('should take user back a page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new MoodTrackingPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('rightButtonEvent', () => {
    it('should take user to happy face page', () => {
      const page = new MoodTrackingPage();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('happyMoodPage');
    });
 });

  describe('#bottomButtonEvent', () => {
    it('should take user to home page', () => {
      const page = new MoodTrackingPage();
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/')
    })
  })
});

