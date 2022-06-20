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

export const getImages = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: ActionType.GET_IMAGES,
    });

    const { data } = await axios.get<Image[]>(
      "https://api.unsplash.com/photos/?client_id=63XyR-MdNNJwESg67izcfmHsZOB07CMpSZd0iQ4nshI&per_page=20"
    );

    dispatch({
      type: ActionType.GET_IMAGES_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: ActionType.GET_IMAGES_FAIL,
      payload: error.message,
    });
  }
};

export const sortByTitle = () => async (dispatch: Dispatch<Action>) => {
  try {
    const { data } = await axios.get<Image[]>(
      "https://api.unsplash.com/photos/?client_id=63XyR-MdNNJwESg67izcfmHsZOB07CMpSZd0iQ4nshI&per_page=20"
    );

    const payload = data.sort((a, b) =>
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
