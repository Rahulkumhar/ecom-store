import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "../Components/Cart";

test("renders cart details and summary correctly", () => {
  const cartItems = [
    { id: 1, title: "Product 1", quantity: 2, price: 15 },
    { id: 2, title: "Product 2", quantity: 1, price: 20 },
  ];

  render(
    <Cart
      cartItems={cartItems}
      onRemoveFromCart={() => {}}
      onUpdateQuantity={() => {}}
    />
  );

  // Check if cart items are rendered correctly
  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
  expect(screen.getByText("Total: $30")).toBeInTheDocument();
  expect(screen.getByText("Product 2")).toBeInTheDocument();
  expect(screen.getByText("Quantity: 1")).toBeInTheDocument();
  expect(screen.getByText("Total: $20")).toBeInTheDocument();

  // Check if cart summary is rendered correctly
  expect(screen.getByText("Cart Summary")).toBeInTheDocument();
  expect(screen.getByText("Total Amount:")).toBeInTheDocument();
});
