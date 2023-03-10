import { useState } from "react";

const AddTaskForm = ({ setTasks, tasks }) => {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const newTask = { id: id, task: task, day: day, isDone: false };
    setTasks([...tasks, newTask]);
    setTask("");
    setDay("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="add task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input
            type="date"
            id="day"
            name="day"
            required
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
