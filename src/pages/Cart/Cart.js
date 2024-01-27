import React from "react";
import "./Cart.css";
import Layout from "../../components/Layout/Layout";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const Cart = () => {
  const cartCtx = useContext(CartContext);

  const productQuantityHandler = (operation, item) => {
    if (operation === "plus") {
      cartCtx.addItem(item);
    } else if (operation === "minus") {
      cartCtx.removeItem(item.id);
    }
  };
  const payoutSuccess = () => {
    if (cartCtx.totalAmount == 0) {
      alert("You have nothing in cart");
    } else
      alert(
        "You have successfully Purchased products of cost" +
          " $" +
          cartCtx.totalAmount
      );
  };
  const deleteItemHandler = (id) => {
    cartCtx.deleteItem(id);
  };
  console.log(cartCtx.items);
  return (
    <Layout>
      <div className="mainCart">
        <h2>Your Cart</h2>
        <div className="cart">
          <div className="cartItems">
            {cartCtx.items.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <div className="cartItem1">
                    <img src={item.image} alt="" />
                    <div>Name: {item.name}</div>
                  </div>
                  <div className="cartItem2">
                    <div className="price">Price: ${item.price}</div>
                    <div>
                      <div>
                        Quantity:&nbsp;
                        <button
                          className="quantityBtns"
                          onClick={() => {
                            productQuantityHandler("minus", item);
                          }}
                        >
                          -
                        </button>
                        &nbsp;&nbsp; {item.amount}&nbsp;&nbsp;
                        <button
                          className="quantityBtns"
                          onClick={() => {
                            productQuantityHandler("plus", item);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      className="delete"
                      onClick={() => {
                        deleteItemHandler(item.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cartBill">
            <div className="billItems">
              {cartCtx.items.map((item) => {
                return (
                  <div className="billItem" key={item.id}>
                    <span className="title">
                      Name: {item.name}
                      <span>x{item.amount}</span>
                    </span>
                    <span className="price">
                      price: ${item.price * item.amount}
                    </span>
                  </div>
                );
              })}
            </div>
            <button className="payoutBtn" onClick={payoutSuccess}>
              Payout <span>${cartCtx.totalAmount}</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
