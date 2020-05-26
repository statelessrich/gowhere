import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
// import cityReducer from "./reducers/cityReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
