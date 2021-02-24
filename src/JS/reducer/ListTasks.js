import { ADD_TASK, DELETE_TASK, DONE_TASK } from "../actionTypes/actionTypes";

const initialState = {
  listTasks: [
    { id: Math.random(), task: "task1", isDone: false },
    { id: Math.random(), task: "task2", isDone: false },
    { id: Math.random(), task: "task3", isDone: false },
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, listTasks: state.listTasks.concat(action.payload) };
    case DELETE_TASK:
      return {
        ...state,
        listTasks: state.listTasks.filter((el) => el.id !== action.payload),
      };
    case DONE_TASK:
      return {
        ...state,
        listTasks: state.listTasks.map((el) =>
          el.id == action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
