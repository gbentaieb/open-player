import * as states from '../constants/CoreStates';

export const playingStates = [states.PLAYING, states.BUFFERING, states.SEEKING];
export const waitingStates = [states.LOADING, states.BUFFERING, states.SEEKING];

export function isWaiting(state) {
  return waitingStates.includes(state);
}

export function isPlaying(state) {
  return playingStates.includes(state);
}
