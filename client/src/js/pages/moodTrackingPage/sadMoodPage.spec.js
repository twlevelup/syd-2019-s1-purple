const SadMoodPage = require('./sadMoodPage');

describe('The Sad Mood Page', () => {

  describe('#render', () => {

    it('should show main class image', () => {
       const page = new SadMoodPage();
       page.pageWillLoad();
      expect(page.render()).toContain('<img src="test-file-stub" class="pull-left"/>');
    });

    it('should show nav class images', () => {
       const page = new SadMoodPage();
       page.pageWillLoad();
      expect(page.render()).toContain('<img src="test-file-stub" class="nav"/>');
    });

    it('should show home class image', () => {
       const page = new SadMoodPage();
       page.pageWillLoad();
      expect(page.render()).toContain('<img src="test-file-stub" class="home"/>');
    });

  });

  describe('#faceButtonEvent', () => {
    it('goes to home page', () => {
      const page = new SadMoodPage();
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

      const page = new SadMoodPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('happyMoodPage');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('should take user to home page', () => {
      const page = new SadMoodPage();
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/')
    })
  })

});
