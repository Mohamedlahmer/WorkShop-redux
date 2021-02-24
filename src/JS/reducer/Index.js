import { combineReducers } from "redux";

import taskReducer from "./ListTasks";

const rootReducer = combineReducers({ taskReducer });
export default rootReducer;
