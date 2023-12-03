import cartReducer from "../Redux/cartReducer";

test("should add item to the cart", () => {
  const initialState = { cart: [] };
  const action = {
    type: "ADD_TO_CART",
    payload: { id: 1, title: "Product 1", price: 20, quantity: 1 },
  };

  const newState = cartReducer(initialState, action);

  expect(newState.cart).toHaveLength(1);
  expect(newState.cart[0].title).toBe("Product 1");
});

test("should remove item from the cart", () => {
  const initialState = {
    cart: [{ id: 1, title: "Product 1", price: 20, quantity: 1 }],
  };
  const action = { type: "REMOVE_FROM_CART", payload: 1 };

  const newState = cartReducer(initialState, action);

  expect(newState.cart).toHaveLength(0);
});

test("should update quantity of an item in the cart", () => {
  const initialState = {
    cart: [{ id: 1, title: "Product 1", price: 20, quantity: 1 }],
  };
  const action = {
    type: "UPDATE_QUANTITY",
    payload: { productId: 1, quantity: 3 },
  };

  const newState = cartReducer(initialState, action);

  expect(newState.cart[0].quantity).toBe(3);
});

test("should clear the cart", () => {
  const initialState = {
    cart: [{ id: 1, title: "Product 1", price: 20, quantity: 1 }],
  };
  const action = { type: "CLEAR_CART" };

  const newState = cartReducer(initialState, action);

  expect(newState.cart).toHaveLength(0);
});

test("should return the current state for unknown action types", () => {
  const initialState = { cart: [] };
  const action = { type: "UNKNOWN_ACTION" };

  const newState = cartReducer(initialState, action);

  expect(newState).toEqual(initialState);
});
