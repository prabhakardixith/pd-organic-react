import React from "react";
import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "70px",
          left: 0,
          bottom: 0,
          right: "0",
          zIndex: -1,
        }}
      >
        <Outlet />
      </div>
      
    </>
  );
};

export default Users;
