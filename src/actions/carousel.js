import {
  CAROUSEL_SWITCH_ITEM
} from "../consts";

export const switchItem = (number) => ({
  type: CAROUSEL_SWITCH_ITEM,
  payload: number
});