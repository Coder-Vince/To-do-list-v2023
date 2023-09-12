import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ tasks, setTasks, inputTask, setInputTask }) => {
  //   const task = tasks.map((item, index) => {
  //     return <div key={index}>{item}</div>;
  //   });

  const handleChange = (event) => {
    // event.preventDefault();
    const value = event.target.value;
    setInputTask(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = [...tasks];
    newTask.push({ title: inputTask, isDone: false });
    setTasks(newTask);
    setInputTask("");
    console.log(tasks);
  };

  return (
    <div className="container">
      <div>
        {tasks.map((task, index) => {
          return (
            <div className="tasks" key={index}>
              <input
                checked={task.isDone}
                readOnly={true}
                type="checkbox"
                onClick={() => {
                  const newTask = [...tasks];
                  newTask[index].isDone = !newTask[index].isDone;
                  setTasks(newTask);
                }}
              />
              <span className={task.isDone === true ? "checked" : ""}>
                {task.title}
              </span>
              <FontAwesomeIcon
                className="trash"
                size="lg"
                onClick={() => {
                  const newTask = [...tasks];
                  newTask.splice(index, 1);
                  setTasks(newTask);
                }}
                icon={faTrash}
              />
            </div>
          );
        })}
      </div>
      <div>
        {/* <p>{task}</p> */}
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            value={inputTask}
            onChange={handleChange}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
