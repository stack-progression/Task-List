import React, { useContext } from "react";
import "./Header.css";
import { AppContext } from "../../context/AppContext";

const Header = () => {
  const { open, setOpen, CheckedAll, DeleteTasks } = useContext(AppContext);

  if (window.innerWidth > 1300) {
    setOpen(true);
  }

  return (
    <div className="header">
      <button
        onClick={() => setOpen(!open)}
        className={`open-add-task ${open === true ? " active" : ""}`}
      >
        +
      </button>
      <h1>Task List</h1>
      <div className="delete-or-checked-all">
        <button onClick={() => CheckedAll()}>Checked all</button>
        <button onClick={() => DeleteTasks()}>Delete all</button>
      </div>
    </div>
  );
};

export default Header;
