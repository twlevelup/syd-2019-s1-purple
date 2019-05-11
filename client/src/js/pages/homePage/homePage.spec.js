const HomePage = require('./homePage');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const NotificationHub = require('watch-framework').NotificationHub;
const AlertNotification = require("../../notifications/AlertNotification/AlertNotification");

describe('HomePage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#pageWillLoad', () => {
    it('should set contacts data on page load', () => {
      spyOn(StorageHub, 'setData')
      const page = new HomePage();
      page.pageWillLoad();
      expect(StorageHub.setData).toBeCalledWith('contacts', expect.any(Array));
    })

    it('should not show schedule notification when the time is before 10:50', () => {
      Date.now = jest.fn(() => 0)
      spyOn(Date.prototype, 'getTime').and.returnValue(0);
      spyOn(NotificationHub, 'show');
      const page = new HomePage();
      page.pageWillLoad();
      expect(NotificationHub.show).not.toBeCalled();
    });
  });

  describe('showNotification', () => {
    it('showNotification should show notification when the argument is larger than 10:50', () => {
      spyOn(NotificationHub, 'show');
      const page = new HomePage();
      page.showNotification(1557571800001);
      expect(NotificationHub.show).toBeCalledWith('schedule', "");
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to moodTracking page', () => {
      const page = new HomePage();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('moodTracking');
    });
  });



  // describe('#bottomButtonEvent', () => {
  //   it('scrolls page down', () => {

  //     const page = new HomePage({ watchFace });

  //     page.bottomButtonEvent();

  //     expect(watchFace.scrollTop).toEqual(40);

  //   });
  // });

  describe('#topButtonEvent', () => {
    it('goes to sosPage', () => {
     const page = new HomePage();
    spyOn(page, 'navigate');
    page.topButtonEvent();
    expect(page.navigate).toHaveBeenCalledWith('sosPage');
    });

  });

  describe('#updateTimeDisplay', () => {
    it('updateTimeDisplays calls clock-time if its in the window', () => {
      const page = new HomePage();

      watchFace.innerHTML = page.render();

      jest.spyOn(page,"getDateTime");
      page.updateTimeDisplay(page.getDateTime);
      expect(page.getDateTime).toHaveBeenCalledTimes(1);
    });
  });

  describe('#updateTimeDisplay', () => {
    it('updateTimeDisplays does not call clock-time if its not in the window', () => {
      const page = new HomePage();

      jest.spyOn(page,"getDateTime");
      page.updateTimeDisplay(page.getDateTime);
      expect(page.getDateTime).toHaveBeenCalledTimes(0);
    });
  });

  describe('#updateTimeEverySecond', () => {
    it('update time display gets called three times in 3000 ms', () => {
      const page = new HomePage();

      spyOn(page, 'updateTimeDisplay');

      jest.useFakeTimers();
      page.updateTimeEverySecond();
      jest.runTimersToTime(3000);

      expect(page.updateTimeDisplay).toHaveBeenCalledTimes(3);
    });
  });
});

describe('#leftButtonEvent', () => {
  it('should take the user to the schedule page', () => {
    const props = {
      navigate: () => { },
    };

    const page = new HomePage(props);
    spyOn(page, 'navigate');

    page.leftButtonEvent();
    expect(page.navigate).toHaveBeenCalledWith('schedulePage');
  });
});
