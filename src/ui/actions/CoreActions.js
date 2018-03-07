/* eslint-disable import/prefer-default-export */
import * as types from '../constants/ActionsTypes';

/**
 * Merge new data informations
 */
export function requestPlay(play) {
  return {
    type: types.REQUEST_PLAY,
    payload: play,
  };
}
