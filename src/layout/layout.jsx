import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Nav } from "./styled";

const getNavStyles = ({ isActive }) =>
  isActive
    ? {
        color: "white",
        fontSize: "25px",
        cursor: "default"
      }
    : {
        color: "white"
      };

export default function Layout({}) {
  return (
    <>
      <Nav>
        <NavLink style={getNavStyles} to="/">
          Каталог
        </NavLink>
      </Nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
