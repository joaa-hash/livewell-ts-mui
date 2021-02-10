import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import { Fish } from "../interfaces";

export interface AddFishAction {
  type: ActionTypes.addFish;
  payload: Fish[];
}
export interface GetUserFishAction {
  type: ActionTypes.getUserFish;
  payload: Fish[];
}
export interface DeleteFishAction {
  type: ActionTypes.deleteFish;
  payload: Fish[];
}

const url = "https://livewell-app-api.herokuapp.com/";

export const addFish = (formData: {}, props: any) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post<Fish[]>(`${url}/fish`, formData);

    dispatch<AddFishAction>({
      type: ActionTypes.addFish,
      payload: response.data,
    });
    props.history.push("/user/fish-view");
  };
};

export const getUserFish = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Fish[]>(`${url}/fish`);
    dispatch<GetUserFishAction>({
      type: ActionTypes.getUserFish,
      payload: response.data,
    });
  };
};

export const deleteFish = (id: Number) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.delete<Fish[]>(`${url}/fish/${id}`);
    dispatch<DeleteFishAction>({
      type: ActionTypes.deleteFish,
      payload: response.data,
    });
  };
};
