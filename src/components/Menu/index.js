import React from "react";
import MenuItem from "../MenuItem";

export default class Menu extends React.Component {
  render() {
    const { menuName, menuItems } = this.props;

    if (!menuItems) {
      return <div>No menu items available at this time</div>;
    }

    return (
      <div className="menu">
        <h1 className="menuName">{menuName} Menu</h1>
        <div className="menuItems">
          {menuItems.map((item) => (
            <MenuItem
              key={item.itemId}
              itemId={item.itemId}
              itemPrice={item.itemPrice}
              itemName={item.itemName}
              itemDescription={item.itemDescription}
            />
          ))}
        </div>
      </div>
    );
  }
}
