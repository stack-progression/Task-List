import React from "react";
import "./Task.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Task = (t) => {
  const { setNewText, EditTask, DeleteTask, CheckTask } =
    useContext(AppContext);

  return (
    <div className="task">
      <button className="check-task btn" onClick={() => CheckTask(t.id)}>
        {t.checked === true ? <i className="fa-solid fa-check"></i> : ""}
      </button>
      <div className="text-section">
        <p className={t.checked === true ? "checked" : ""} style={{ display: t.edit === false ? "flex" : "none" }}>{t.text}</p>
        <input
          style={{ display: t.edit === true ? "flex" : "none" }}
          type="text"
          defaultValue={t.text}
          onChange={(e) => setNewText(e.target.value)}
        />
      </div>
      <div className="task-buttons">
        <button
          className="edit-task btn"
          style={{ display: t.edit === false ? "flex" : "none" }}
          onClick={() => EditTask(t.id)}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          className="set-edit btn"
          style={{ display: t.edit === true ? "flex" : "none" }}
          onClick={() => {
            EditTask(t.id);
          }}
        >
          <i className="fa-regular fa-thumbs-up"></i>
        </button>
        <button className="delete-task btn" onClick={() => DeleteTask(t.id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;
