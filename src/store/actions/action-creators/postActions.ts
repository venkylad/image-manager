import axios from "axios";
import { Dispatch } from "redux";

import { Action } from "..";
import Post, { Image } from "../../../models/postModel";
import ActionType from "../action-types";

export const getPosts = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: ActionType.GET_POST_REQUEST,
    });

    const { data } = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );

    dispatch({
      type: ActionType.GET_POST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: ActionType.GET_POST_FAIL,
      payload: error.message,
    });
  }
};

export const getImages =
  (url: string) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GET_IMAGES,
      });

      const { data } = await axios.get<Image[]>(url);

      const payload = data.sort((a, b) =>
        a?.description
          ?.split(" ")[0]
          ?.localeCompare(b?.description?.split(" ")[0])
      );

      dispatch({
        type: ActionType.GET_IMAGES_SUCCESS,
        payload,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_IMAGES_FAIL,
        payload: error.message,
      });
    }
  };

export const getSearchImages =
  (url: string) => async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get(url);

      dispatch({
        type: ActionType.GET_SEARCH_IMAGES,
        payload: data?.results,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

export const sortByTitle =
  (imageData: Image[]) => async (dispatch: Dispatch<Action>) => {
    try {
      const payload = imageData.sort((a, b) =>
        a?.description
          ?.split(" ")[0]
          ?.localeCompare(b?.description?.split(" ")[0])
      );
      console.log(payload);
      dispatch({
        type: ActionType.SORT_BY_TITLE,
        payload,
      });
    } catch (error: any) {
      console.log(error.message);
      dispatch({
        type: ActionType.GET_IMAGES_FAIL,
        payload: error.message,
      });
    }
  };

export const sortByDate =
  (imageData: Image[]) => async (dispatch: Dispatch<Action>) => {
    try {
      const payload = imageData?.sort((a, b) =>
        a?.created_at?.localeCompare(b?.created_at)
      );
      console.log(payload);
      dispatch({
        type: ActionType.SORT_BY_DATE,
        payload,
      });
    } catch (error: any) {
      console.log(error.message);
      dispatch({
        type: ActionType.GET_IMAGES_FAIL,
        payload: error.message,
      });
    }
  };

export const sortBySize =
  (imageData: Image[]) => async (dispatch: Dispatch<Action>) => {
    try {
      const payload = imageData.sort(
        (a, b) => a?.width * a?.height - b?.width * b?.height
      );
      console.log(payload);
      dispatch({
        type: ActionType.SORT_BY_SIZE,
        payload,
      });
    } catch (error: any) {
      console.log(error.message);
      dispatch({
        type: ActionType.GET_IMAGES_FAIL,
        payload: error.message,
      });
    }
  };

export const checkImage =
  (checked: string[], id: string) => async (dispatch: Dispatch<Action>) => {
    try {
      const existingImage = checked.some((item: string) => item === id);

      if (!existingImage) {
        checked = checked.concat([id]);
      } else {
        checked = checked.filter((item: string) => item !== id);
      }
      dispatch({
        type: ActionType.CHECK_IMAGE,
        payload: checked,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

export const deleteCheckedImages =
  (imageData: Image[], checked: string[]) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const payload = imageData.filter((array) =>
        checked.every((filter) => !(filter === array.id))
      );
      dispatch({
        type: ActionType.DELETE_CHECKED_IMAGE,
        payload: payload,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

export const deleteAllCheckedImage =
  (imageData: Image[], checked: string[]) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const allImages = imageData.map(({ id }) => id);

      checked = checked.concat(allImages);

      dispatch({
        type: ActionType.DELETE_IMAGES,
        payload: checked,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

export const addNewImage =
  (imageData: Image[], image: Image) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.ADD_NEW_IMAGE,
        payload: imageData.concat(image),
      });
    } catch (error: any) {
      console.log(error);
    }
  };

export const removeCheckOnImages = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: ActionType.REMOVE_CHECKS,
      payload: [],
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const searchImage =
  (imageData: Image[], searchText: string) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      let images = imageData;
      let payload;
      payload = images?.filter((val) => {
        if (searchText === "") {
          return imageData;
        } else {
          return val?.description
            ?.split(" ")[0]
            ?.toLowerCase()
            .includes(searchText.toLowerCase());
        }
      });

      if (searchText === "") {
        console.log(imageData);
        payload = images;
      }

      console.log(imageData);

      dispatch({
        type: ActionType.SEARCH_IMAGES,
        payload,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

export const selectImageToAdd =
  (image: Image) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.SELECT_IMAGE_TO_ADD,
        payload: image,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
