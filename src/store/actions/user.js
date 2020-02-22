import axios from "../../axios";
import Cookies from "js-cookie";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const loginAction = (credentials, callback) => dispatch => {
  axios
    .post("/login", { ...credentials })
    .then(res => {
      const user_ = res.data;
      const user = { token: user_._id, ...user_ };
      const cookieSet = new Promise(resolve =>
        resolve(Cookies.set("userinfo", JSON.stringify(user), { expires: 5 }))
      );
      cookieSet.then(() => {
        dispatch(userLoggedIn(user));
        callback(res);
      });
    })
    .catch(err => {
      callback(null, err);
    });
};

export const logoutAction = callback => dispatch => {
  dispatch(userLoggedOut());
  callback();
};
