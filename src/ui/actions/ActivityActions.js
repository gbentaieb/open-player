/* eslint-disable import/prefer-default-export */
import * as types from '../constants/ActionsTypes';

/**
 * Set if player is active
 */
export function setIsActive(bool) {
  return {
    type: types.SET_IS_ACTIVE,
    payload: bool,
  };
}
