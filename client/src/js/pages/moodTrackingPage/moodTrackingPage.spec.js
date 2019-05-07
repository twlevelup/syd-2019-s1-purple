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
      expect(page.render()).toContain('How are you feeling today?');
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

});
