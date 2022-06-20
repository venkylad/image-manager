import { combineReducers } from "redux";

import { checkImageReducer, imageReducer, postReducer } from "./postReducer";

const reducers = combineReducers({
  posts: postReducer,
  images: imageReducer,
  checked: checkImageReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
