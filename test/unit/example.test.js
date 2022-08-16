import React from "react";
import { render } from "@testing-library/react";
import { ProductItem } from "../../src/client/components/ProductItem";
import "@testing-library/jest-dom";

const getProduct = () => {
  return {
    id: 5,
    price: 56,
    name: "Generic Hat",
  };
};

describe("Simple Test Case", () => {
  render(<ProductItem product={getProduct()} />);

  screen.debug();
});
