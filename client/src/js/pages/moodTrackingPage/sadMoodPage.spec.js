const SadMoodPage = require('./sadMoodPage');

describe('#faceButtonEvent', () => {
    it('goes to home page', () => {
      const page = new SadMoodPage();
      spyOn(page, 'navigate');

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
