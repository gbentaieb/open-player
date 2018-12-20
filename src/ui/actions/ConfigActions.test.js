import * as actions from './ConfigActions';
import * as types from '../constants/ActionsTypes';

describe('Config Actions', () => {
  test('Config Actions > setConfig', () => {
    const payload = { test: 'foo' };
    const result = actions.setConfig(payload);

    expect(result.type).toBe(types.MERGE_CONFIG);
    expect(result.payload).toBe(payload);
  });
});
