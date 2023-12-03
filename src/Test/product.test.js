import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductList from "../Components/ProductList";

test("renders product details correctly", () => {
  const product = {
    id: 1,
    title: "Product 1",
    description: "Description of Product 1",
    price: 20,
  };

  render(<ProductList product={product} onAddToCart={() => {}} />);

  // Check if product details are rendered correctly
  expect(screen.getByText(product.title)).toBeInTheDocument();
  expect(screen.getByText(product.description)).toBeInTheDocument();
  expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
});

test('calls onAddToCart when "Add to Cart" button is clicked', () => {
  const product = {
    id: 1,
    title: "Product 1",
    description: "Description of Product 1",
    price: 20,
  };
  const mockAddToCart = jest.fn();

  render(<ProductList product={product} onAddToCart={mockAddToCart} />);

  // Click the "Add to Cart" button
  fireEvent.click(screen.getByText("Add to Cart"));

  // Check if onAddToCart was called with the correct arguments
  expect(mockAddToCart).toHaveBeenCalledWith(product);
});
