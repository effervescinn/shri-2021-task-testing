//@ts-nocheck
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

function ProviderAndRouterWrapper({ children, products, cart }) {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = {
    products: products || [
      {
        id: 0,
        name: "Cheese",
        price: 65,
      },
    ],
    cart: cart || {},
  };
  const store = mockStore(initialState);

  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
}
export default ProviderAndRouterWrapper;
