import { playingStates, waitingStates, isWaiting, isPlaying } from './playerStates';
import { CORE_STATES } from '../constants/CoreStates';

describe('player states utils', () => {
  test('utils > player states > isWaiting', () => {
    CORE_STATES.forEach((state) => {
      const expected = waitingStates.includes(state);
      expect(isWaiting(state)).toEqual(expected);
    });
  });

  test('utils > player states > isPlaying', () => {
    CORE_STATES.forEach((state) => {
      const expected = playingStates.includes(state);
      expect(isPlaying(state)).toEqual(expected);
    });
  });
});
