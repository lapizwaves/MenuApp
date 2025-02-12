import Menu from "../Menu";
import React from "react";

const MenuApp = ({ data = [] }) => {
  console.log("Data in MenuApp:", data);
  return (
    <div className="App">
      {data.map((menu) => (
        <Menu
          key={menu.menuName}
          menuName={menu.menuName}
          menuItems={menu.menuItems}
        ></Menu>
      ))}
    </div>
  );
};

export default MenuApp;
