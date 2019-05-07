const HappyMoodPage = require('./happyMoodPage');

describe('The Happy Mood Page', () => {

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new HappyMoodPage();
      expect(page.render()).toContain('happyface');
    });
  });


describe('#faceButtonEvent', () => {
    it('goes to home page', () => {
      const page = new HappyMoodPage();
      spyOn(page, 'navigate');

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
  describe('#leftButtonEvent', () => {
  it('should take user back a page', () => {
    const props = {
      navigate: () => { },
    };

    const page = new HappyMoodPage(props);
    spyOn(page, 'navigate');

    page.leftButtonEvent();
    expect(page.navigate).toHaveBeenCalledWith('moodTracking');
  });
});
});
