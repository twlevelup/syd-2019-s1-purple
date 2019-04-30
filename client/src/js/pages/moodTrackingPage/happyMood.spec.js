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
});
