export default class FakeRxPlayer {
  constructor() {
    this.constructorCalled = true;
    this.state = 'STOPPED';
    this.events = {};
  }

  loadVideo = () => {
    this.loadVideoCalled = true;
  }

  addEventListener(event, cb) {
    this.events[event] = cb;
  }
}
