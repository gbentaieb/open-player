import * as actions from './ActivityActions';
import * as types from '../constants/ActionsTypes';

describe('Activity Actions', () => {
  test('Activity Actions > setIsActive', () => {
    const payload = true;
    const result = actions.setIsActive(payload);

    expect(result.type).toBe(types.SET_IS_ACTIVE);
    expect(result.payload).toBe(payload);
  });
});
