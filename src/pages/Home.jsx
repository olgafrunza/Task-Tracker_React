import { useEffect, useState } from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";

const Home = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <Header tasks={tasks} setTasks={setTasks} />
      {tasks.length > 0 ? (
        <ShowTasks tasks={tasks} setTasks={setTasks} />
      ) : (
        <p className="text-center">No Task To Show</p>
      )}
    </div>
  );
};

export default Home;
