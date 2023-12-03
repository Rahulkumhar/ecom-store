import {
  addToCart,
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../Redux/action";

test("addToCart action creator creates correct action", () => {
  const product = [
    { id: 1, title: "Product 1", price: 20, quantity: 1 },
    { id: 2, title: "Product 2", price: 10, quantity: 1 },
  ];
  const expectedAction = { type: "ADD_TO_CART", payload: product };

  expect(addToCart(product)).toEqual(expectedAction);
});

test("removeFromCart action creator creates correct action", () => {
  const productId = 1;
  const expectedAction = { type: "REMOVE_FROM_CART", payload: productId };

  expect(removeFromCart(productId)).toEqual(expectedAction);
});

test("updateQuantity action creator creates correct action", () => {
  const payload = { productId: 1, quantity: 3 };
  const expectedAction = { type: "UPDATE_QUANTITY", payload };

  expect(updateQuantity(payload.productId, payload.quantity)).toEqual(
    expectedAction
  );
});

test("clearCart action creator creates correct action", () => {
  const expectedAction = { type: "CLEAR_CART" };

  expect(clearCart()).toEqual(expectedAction);
});
