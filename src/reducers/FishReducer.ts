import { AddFishAction, DeleteFishAction, GetUserFishAction } from "../actions";
import { ActionTypes } from "../actions/types";
import { Fish } from "../interfaces";

export const fishReducer = (
  state: Fish[] = [],
  action: AddFishAction | GetUserFishAction | DeleteFishAction
) => {
  switch (action.type) {
    case ActionTypes.addFish:
      return [...action.payload];
    case ActionTypes.getUserFish:
      return [...action.payload];
    case ActionTypes.deleteFish:
      return [...action.payload];
    default:
      return state;
  }
};
