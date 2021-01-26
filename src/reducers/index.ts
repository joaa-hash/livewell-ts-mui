import { combineReducers } from "redux";
import { reducer as formReducer, FormStateMap } from "redux-form";
import { Fish } from "../interfaces";
import { fishReducer } from "./FishReducer";

export interface StoreState {
  form: FormStateMap;
  fish: Fish[];
}

export const reducers = combineReducers<StoreState>({
  form: formReducer,
  fish: fishReducer,
});
