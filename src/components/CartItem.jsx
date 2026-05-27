import { useSelector, useDispatch } from "react-redux";

import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem() {

  const cart =
    useSelector(
      (state) => state.cart.cartItems
    );

  const dispatch = useDispatch();

  const calculateTotalAmount = () => {

    return cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>

      <h1>Shopping Cart</h1>

      {cart.map((item) => (

        <div key={item.id}>

          <img
            src={item.image}
            alt={item.name}
            width="100"
          />

          <h3>{item.name}</h3>

          <p>Price: ${item.price}</p>

          <p>
            Total:
            ${item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity + 1
                })
              )
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity - 1
                })
              )
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Delete
          </button>

        </div>
      ))}

      <h2>
        Total Cart Amount:
        ${calculateTotalAmount()}
      </h2>

      <button>
        Continue Shopping
      </button>

      <button
        onClick={() => alert("Checkout")}
      >
        Checkout
      </button>

    </div>
  );
}

export default CartItem;
