import React from "react";

const MenuItem = ({
  itemId = 1,
  itemPrice = "12",
  itemName = "Lasagne",
  itemDescription = "Meat and cheese layered between house-made pasta with bell peppers and onions.",
}) => {
  return (
    <div className="menu-item" id={`menu-item-${itemId}`}>
      <p>{`$${itemPrice}`}</p>
      <h2>{itemName}</h2>
      <p>{itemDescription}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default MenuItem;
