const HappyMoodPage = require('./happyMoodPage');

describe('The Happy Mood Page', () => {

  describe('#render', () => {

    it('should show main class image', () => {
       const page = new HappyMoodPage();
       page.pageWillLoad();
      expect(page.render()).toContain('<img src="test-file-stub" class="main"/>');
    });

    it('should show nav class image', () => {
       const page = new HappyMoodPage();
       page.pageWillLoad();
      expect(page.render()).toContain('<img src="test-file-stub" class="nav"/>');
    });

    it('should show home class image', () => {
       const page = new HappyMoodPage();
       page.pageWillLoad();
      expect(page.render()).toContain('<img src="test-file-stub" class="home"/>');
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

  describe('#bottomButtonEvent', () => {
    it('should take user to home page', () => {
      const page = new HappyMoodPage();
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/')
    })
  })
});
});
