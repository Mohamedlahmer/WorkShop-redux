import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../JS/actions/ListTasks";

const AddTask = () => {
  const [task, settask] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input onChange={(e) => settask(e.target.value)} value={task} />
      <button
        onClick={() => {
          dispatch(addTask({ id: Math.random(), task: task, isDone: false }));
          settask("");
        }}
      >
        Add task
      </button>
    </div>
  );
};

export default AddTask;
