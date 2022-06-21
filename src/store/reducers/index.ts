import { combineReducers } from "redux";

import {
  checkImageReducer,
  imageReducer,
  postReducer,
  searchAddImageReducer,
  selectImageToAddReducer,
} from "./postReducer";

const reducers = combineReducers({
  posts: postReducer,
  images: imageReducer,
  checked: checkImageReducer,
  search: searchAddImageReducer,
  selectImageToAdd: selectImageToAddReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
