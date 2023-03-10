import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = ({ setTasks, tasks }) => {
  const [btnStyle, setBtnStyle] = useState({
    name: "show add task bar",
    bgColor: "purple",
  });
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (show) {
      setBtnStyle({
        name: "show add task bar",
        bgColor: "purple",
      });
    } else {
      setBtnStyle({
        name: "close add task bar",
        bgColor: "red",
      });
    }
    setShow(!show);
  };

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <button
        onClick={handleShow}
        className="btn"
        style={{ backgroundColor: btnStyle.bgColor }}
      >
        {btnStyle.name}
      </button>
      {show && <AddTaskForm tasks={tasks} setTasks={setTasks} />}
    </header>
  );
};

export default Header;
