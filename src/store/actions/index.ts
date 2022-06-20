import { checkImage } from "./action-creators/postActions";
import Post, { Image } from "../../models/postModel";
import ActionType from "./action-types";

interface GetPostRequestAction {
  type: ActionType.GET_POST_REQUEST;
}

interface GetPostSuccessAction {
  type: ActionType.GET_POST_SUCCESS;
  payload: Post[];
}

interface GetPostFailAction {
  type: ActionType.GET_POST_FAIL;
  payload: string;
}

interface GetImagesAction {
  type: ActionType.GET_IMAGES;
}

interface GetImagesSuccessAction {
  type: ActionType.GET_IMAGES_SUCCESS;
  payload: Image[];
}

interface GetImagesFailAction {
  type: ActionType.GET_IMAGES_FAIL;
  payload: string;
}

interface CheckImage {
  type: ActionType.CHECK_IMAGE;
  payload: string[];
}
interface DeleteImages {
  type: ActionType.DELETE_IMAGES;
  payload: Image[];
}

interface SortByTitleAction {
  type: ActionType.SORT_BY_TITLE;
  payload: Image[];
}

export type Action =
  | GetPostRequestAction
  | GetPostSuccessAction
  | GetPostFailAction
  | GetImagesAction
  | GetImagesFailAction
  | GetImagesSuccessAction
  | CheckImage
  | DeleteImages
  | SortByTitleAction;
