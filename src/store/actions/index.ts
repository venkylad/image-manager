import { Image } from "../../models/postModel";
import ActionType from "./action-types";

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
  payload: string[];
}

interface SortByTitleAction {
  type: ActionType.SORT_BY_TITLE;
  payload: Image[];
}

interface SortByDateAction {
  type: ActionType.SORT_BY_DATE;
  payload: Image[];
}

interface SortBySizeAction {
  type: ActionType.SORT_BY_SIZE;
  payload: Image[];
}

interface DeleteCheckedImage {
  type: ActionType.DELETE_CHECKED_IMAGE;
  payload: Image[];
}

interface RemoveChecks {
  type: ActionType.REMOVE_CHECKS;
  payload: [];
}

interface SearchImages {
  type: ActionType.SEARCH_IMAGES;
  payload: Image[];
}
interface GetSearchImages {
  type: ActionType.GET_SEARCH_IMAGES;
  payload: Image[];
}

interface SelectImageToAdd {
  type: ActionType.SELECT_IMAGE_TO_ADD;
  payload: Image;
}

interface AddNewImage {
  type: ActionType.ADD_NEW_IMAGE;
  payload: Image[];
}
export type Action =
  | GetImagesAction
  | GetImagesFailAction
  | GetImagesSuccessAction
  | CheckImage
  | DeleteImages
  | SortByTitleAction
  | SortByDateAction
  | SortBySizeAction
  | DeleteCheckedImage
  | RemoveChecks
  | SearchImages
  | GetSearchImages
  | SelectImageToAdd
  | AddNewImage;
