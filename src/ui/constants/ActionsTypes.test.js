import * as actiontypes from './ActionsTypes';

describe('ActionTypes > Snapshot', () => {
  test('ActionTypes > Snapshot', () => {
    expect(actiontypes).toMatchSnapshot();
  });
});
