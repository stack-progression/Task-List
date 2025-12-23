import React from "react";
import Header from "../components/Header/Header";
import Tasks from "../components/Tasks/Tasks";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Header />
      <Tasks />
    </div>
  );
};

export default RootLayout;
