import "./App.css";
import Headers from "./components/Headers";
import Todo from "./components/Todo";
import Footers from "./components/Footers";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { title: "go swim", isDone: false },
    { title: "cook dinner", isDone: false },
  ]);
  const [inputTask, setInputTask] = useState("");
  // console.log(task);
  // console.log(setTask);
  return (
    <div>
      <Headers />
      <Todo
        tasks={tasks}
        setTasks={setTasks}
        inputTask={inputTask}
        setInputTask={setInputTask}
      />
      <Footers />
    </div>
  );
}

export default App;
