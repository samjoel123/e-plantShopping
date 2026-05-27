function CartItem() {

  const item = {
    name: "Aloe Vera",
    price: "$10",
    quantity: 1
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <div>
        <h3>{item.name}</h3>

        <p>{item.price}</p>

        <p>Quantity: {item.quantity}</p>

        <button>+</button>

        <button>-</button>

        <button>Delete</button>
      </div>

      <h2>Total Cart Amount: $10</h2>

      <button>Continue Shopping</button>

      <button>Checkout</button>
    </div>
  );
}

export default CartItem;
