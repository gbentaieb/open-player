export default class FakeRxPlayer {
  constructor() { this.constructorCalled = true; }

  loadVideo = () => { this.loadVideoCalled = true; }
}
