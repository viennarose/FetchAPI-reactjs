import React from "react";
import { MdPlace } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "../App.css";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/venue",
      name: "venue",
      icons: <MdPlace />,
    },
  ];

  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="m-2 float-center">
          <h1 className="logo text-white px-5 m-2 float-center">DC 302: Reactjs Midterm Project</h1>
        </div>
        {menuItem.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              key={index}
              className="text-white"
              activeclassname="active"
            >
            </NavLink>
          );
        })}
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
