import * as actions from './CoreActions';
import * as types from '../constants/ActionsTypes';

describe('Core Actions', () => {
  test('Core Actions > requestPlay', () => {
    const payload = true;
    const result = actions.requestPlay(payload);

    expect(result.type).toBe(types.REQUEST_PLAY);
    expect(result.payload).toBe(payload);
  });

  test('Core Actions > setPlayerState', () => {
    const payload = 'PLAYING';
    const result = actions.setPlayerState(payload);

    expect(result.type).toBe(types.SET_PLAYER_STATE);
    expect(result.payload).toBe(payload);
  });

  test('Core Actions > seekTo', () => {
    const payload = 1234;
    const result = actions.seekTo(payload);

    expect(result.type).toBe(types.SEEK_TO);
    expect(result.payload).toBe(payload);
  });

  test('Core Actions > setPlayerTimes', () => {
    const payload = { currentTime: 1, startTime: 2, endTime: 3 };
    const result = actions.setPlayerTimes(payload);

    expect(result.type).toBe(types.SET_PLAYER_TIMES);
    expect(result.payload).toBe(payload);
  });

  test('Core Actions > setForcedMuted', () => {
    const payload = true;
    const result = actions.setForcedMuted(payload);

    expect(result.type).toBe(types.SET_FORCED_MUTED);
    expect(result.payload).toBe(payload);
  });
});
