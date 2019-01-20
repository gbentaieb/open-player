import * as coreStates from './CoreStates';

describe('CoreStates > Snapshot', () => {
  test('CoreStates > Snapshot', () => {
    expect(coreStates).toMatchSnapshot();
  });
});
