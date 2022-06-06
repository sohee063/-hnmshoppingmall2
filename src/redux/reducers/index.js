import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReduces";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});
