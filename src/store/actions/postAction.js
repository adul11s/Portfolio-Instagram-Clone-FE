import axios from "axios";
const url = "http://0.0.0.0:5050/post/list";

export const getAllPost = () => {
  return async (dispatch) => {
    axios
      .get(url)
      .then(async (response) => {
        dispatch({
          type: "REQUEST_TOP_POST_SUCCESS",
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
// post
export const postImage = () => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      image: getState().follow.image,
      description: getState().follow.description,
    };
    const json = JSON.stringify(bodyRequest);
    const token = localStorage.getItem("token");
    await axios
      .post("http://0.0.0.0:5050/post", json, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "POST_IMAGE" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// on change when user input
export const changeInputPost = (e) => {
  return {
    type: "CHANGE_INPUT_POST",
    payload: e,
  };
};

// get post by a user
export const getPostbyUser = (e) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://0.0.0.0:5050/post/user", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "GET_POST_USER", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// delete post
export const deletePost = (item) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios
      .delete("http://0.0.0.0:5050/post/" + item, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "DELETE_POST" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// get all posts from followed-users
export const getPostbyFollowedUser = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://0.0.0.0:5050/post/user_id", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({
          type: "GET_FOLLOWED_POST",
          payload: response.data,
        });
        console.log("get all post", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
