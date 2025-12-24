import React from "react";
import Header from "../components/Header/Header";
import Tasks from "../components/Tasks/Tasks";
import AddTask from "../components/AddTask/AddTask"

const RootLayout = () => {
  return (
    <div className="root-layout">
      <div className="root-layout-add-task">
        <AddTask />
      </div>
      <div className="root-layout-container">
        <Header />
        <Tasks />
      </div>
    </div>
  );
};

export default RootLayout;
