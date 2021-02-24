import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../../JS/actions/ListTasks";

const ListTasks = () => {
  const list = useSelector((state) => state.taskReducer.listTasks);
  const dispatch = useDispatch();
  console.log(list);
  return (
    <div>
      {list.map((el) => (
        <div key={el.id}>
          <p>{el.task}</p>
          <button onClick={() => dispatch(deleteTask(el.id))}>delete</button>
          <button onClick={() => dispatch(doneTask(el.id))}>done</button>
        </div>
      ))}
    </div>
  );
};

export default ListTasks;
