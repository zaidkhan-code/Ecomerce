import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedItems = state.items;
  if (action.type === "ADD") {
    let isAvailable = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updateItem = state.items[isAvailable];
    if (updateItem) {
      updateItem.amount += 1;
      updatedItems[isAvailable] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount = state.totalAmount + action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const updateItemIndex = updatedItems.findIndex(
      (item) => item.id === action.id
    );
    let updatedTotalAmount;
    let updateItem = updatedItems[updateItemIndex];
    if (updateItem.amount > 1) {
      updateItem.amount -= 1;
      updatedItems[updateItemIndex] = updateItem;
      updatedTotalAmount = state.totalAmount - updateItem.price;
    } else {
      updatedItems = updatedItems.filter((item) => item.id !== action.id);
      updatedTotalAmount = state.totalAmount - updateItem.price;
    }
    return {
      totalAmount: updatedTotalAmount,
      items: updatedItems,
    };
  }
  if (action.type === "DELETE") {
    const updateItemIndex = updatedItems.findIndex((item) => {
      return item.id === action.id;
    });

    let updateItem = updatedItems[updateItemIndex];
    updatedItems = updatedItems.filter((item) => item.id !== action.id);
    let updatedTotalAmount = Math.round(state.totalAmount - updateItem.price);
    return {
      totalAmount: updatedTotalAmount,
      items: updatedItems,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
    console.log(item);
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const deleteItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "DELETE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    deleteItem: deleteItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
