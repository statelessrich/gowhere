import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import cityReducer from "./reducers/cityReducer";

const store = createStore(cityReducer)
export default store;