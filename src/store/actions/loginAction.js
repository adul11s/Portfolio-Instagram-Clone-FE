import axios from "axios";
import jwt from "jwt-decode";
export const doLogin = (props) => {
  return async (dispatch, getState) => {
    const username = getState().login.username;
    const password = getState().login.password;
    await axios
      .get("http://0.0.0.0:5050/auth", {
        params: { username: username, password: password },
      })
      .then(async (response) => {
        if (response.data.hasOwnProperty("token")) {
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("isLogin", true);
          const token = localStorage.getItem("token");
          const user = jwt(token);
          const claims = user["user_claims"]["client_id"];
          const client = claims.toString();
          const bio = await axios.get("http://0.0.0.0:5050/user/" + client, {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json; charset=utf-8",
              Authorization: `Bearer ${token}`,
            },
          });
          localStorage.setItem("bio", JSON.stringify(bio.data));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const changeInputUser = (el) => {
  return {
    type: "CHANGE_INPUT_USER",
    payload: el,
  };
};
export const doLogout = (el) => {
  localStorage.removeItem("isLogin");
  localStorage.removeItem("token");
  localStorage.removeItem("bio");
  return {
    type: "LOG_OUT",

    payload: el,
  };
};

export const doRegister = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      username: getState().login.username,
      password: getState().login.password,
      name: getState().login.name,
      age: getState().login.age,
      price: getState().login.price,
      color: getState().login.color,
      weight: getState().login.weight,
      top_product: getState().login.top_product,
    };
    const register = await axios.post(
      "http://0.0.0.0:5050/register",
      bodyRequest
    );
    console.log("data", register.data);
    dispatch({ type: "SUCCESS_REGISTER" });
  };
};
