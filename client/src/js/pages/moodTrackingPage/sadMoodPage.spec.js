const SadMoodPage = require('./sadMoodPage');

describe('#faceButtonEvent', () => {
    it('goes to home page', () => {
      const page = new SadMoodPage();
      spyOn(page, 'navigate');

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });

describe('#leftButtonEvent', () => {
  it('should take user back a page', () => {
    const props = {
      navigate: () => { },
    };

    const page = new SadMoodPage(props);
    spyOn(page, 'navigate');

    page.leftButtonEvent();
    expect(page.navigate).toHaveBeenCalledWith('happyMoodPage');
  });
  });
});
