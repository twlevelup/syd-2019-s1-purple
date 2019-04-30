const SosPage = require('./sosPage');

describe('The Sos Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new SosPage();
      expect(page.render()).toContain('Location sent to Mom');
    });
  });
});
