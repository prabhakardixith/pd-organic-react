import { Paper } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <Paper elevation={4}>
      <nav
        style={{
          backgroundColor: "#0277BD",
          padding: "16px 32px",
          marginBottom: "10px",
        }}
      >
        <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </NavLink>
        <NavLink
          style={{ marginLeft: "16px", color: "white", textDecoration: "none" }}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={{ marginLeft: "16px", color: "white", textDecoration: "none" }}
          to="/crud"
        >
          CRUD
        </NavLink>
      </nav>
    </Paper>
  );
};

export default Navbar;
