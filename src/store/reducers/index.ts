import { combineReducers } from "redux";

import {
  checkImageReducer,
  imageReducer,
  searchAddImageReducer,
  selectImageToAddReducer,
} from "./postReducer";

const reducers = combineReducers({
  images: imageReducer,
  checked: checkImageReducer,
  search: searchAddImageReducer,
  selectImageToAdd: selectImageToAddReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
