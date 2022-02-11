import axios from "axios";

import { SIGN_IN, SIGN_UP, GOOGLE_AUTH, SIGN_OUT } from "./auth.type";
import { clearUser } from "../user/user.action";

export const signIn = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `http://localhost:4000/auth/signin`,
      data: { credentials: userData },
    });
  
    localStorage.setItem(
      "zomatoUser",
      JSON.stringify({ token: User.data.token })
    );

    // window.location.reload();

    return dispatch({ type: SIGN_IN, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signUp = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `http://localhost:4000/auth/signup`,
      data: { credentials: userData },
    });

    localStorage.setItem(
      "zomatoUser",
      JSON.stringify({ token: User.data.token })
    );
    window.location.reload();
    return dispatch({ type: SIGN_UP, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    localStorage.removeItem("zomatoUser"); // remove the token from localStorage
    clearUser();
   // window.location.href = "http://localhost:3001/restaurants"; // re render to delivery page
   window.location.reload();

    return dispatch({ type: SIGN_OUT, payload: {} });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
