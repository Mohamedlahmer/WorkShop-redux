import { ADD_TASK, DELETE_TASK, DONE_TASK } from "../actionTypes/actionTypes";

export const addTask = (newtask) => {
  return { type: ADD_TASK, payload: newtask };
};
export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};
export const doneTask = (id) => {
  return { type: DONE_TASK, payload: id };
};
