import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import tracker from "../api/tracker";
import * as RootNavigation from "../RootNavigation";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { ErrorMessage: "", Token: action.payload };
    case "ADD_ERROR":
      return { ...state, ErrorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await tracker.post("/signup", { email, password });
    await AsyncStorage.setItem("Token", response.data.token);
    dispatch({ type: "SIGNUP", payload: response.data.token });
    RootNavigation.navigate("Tabs", {});
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "ADD_ERROR",
      payload: `Unable To compolete The Singup Process, Please Try again ${error.message}`,
    });
  }
};

const signin = (dispatch) => {
  return ({ email, password }) => {};
};
const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  AuthReducer,
  { signup, signin, signout },
  { Tokne: null, ErrorMessage: "" }
);
