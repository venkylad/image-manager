import { Action } from "../actions";
import Post, { Image } from "../../models/postModel";
import ActionType from "../actions/action-types";

interface PostState {
  loading: boolean;
  error: string | null;
  data: Post[] | null;
}

const initialState = { loading: false, error: null, data: null };

export const postReducer = (
  state: PostState = initialState,
  action: Action
): PostState => {
  switch (action.type) {
    case ActionType.GET_POST_REQUEST:
      return { loading: true, error: null, data: null };
    case ActionType.GET_POST_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionType.GET_POST_FAIL:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};

interface ImageState {
  loading: boolean;
  error: string | null;
  data: Image[] | null;
}

const initial = { loading: false, error: null, data: null };

export const imageReducer = (
  state: ImageState = initial,
  action: Action
): ImageState => {
  switch (action.type) {
    case ActionType.GET_IMAGES:
      return { loading: true, error: null, data: null };
    case ActionType.GET_IMAGES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.GET_IMAGES_FAIL:
      return { loading: false, error: action.payload, data: null };
    case ActionType.SORT_BY_TITLE:
      return { loading: false, error: null, data: action.payload };
    default:
      return state;
  }
};

export const checkImageReducer = (state: string[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.CHECK_IMAGE:
      return action.payload;
    default:
      return state;
  }
};