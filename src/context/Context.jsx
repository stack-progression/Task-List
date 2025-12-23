import React, { useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Context = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newText, setNewText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("tasks")
    if(!saved) return;

    try {
      //eslint-disable-next-line react-hooks/set-state-in-effect
      setTasks(JSON.parse(saved))
    } catch {
      //eslint-disable-next-line react-hooks/set-state-in-effect
      setTasks([])
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  })

  const AddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, checked: false}]);
    setTask("");
  };

  const DeleteTask = (id) => {
    setTasks(tasks.filter((i) => i.id !== id));
  };

  const CheckTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const DeleteTasks = () => {
    setTasks([]);
  };

  const CheckedAll = () => {
    const everyTask = tasks.every((t) => t.checked);
    setTasks(tasks.map((t) => ({ ...t, checked: !everyTask })));
  };

/////////////////////////////////////////////////////////////////////////////////////////

  const EditTask = (id) => {
    setTasks(tasks.map((t) => t.id === id ? {...t, text: newText} : t))
    setNewText("")
  };

/////////////////////////////////////////////////////////////////////////////////////////


  const appValue = {
    EditTask,
    CheckedAll,
    DeleteTasks,
    open,
    setOpen,
    task,
    setTask,
    tasks,
    setTasks,
    AddTask,
    DeleteTask,
    CheckTask,
    newText,
    setNewText,
  };

  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
};

export default Context;
