import React from "react";
import { ProductItem } from "../../src/client/components/ProductItem";
import { ProductDetails } from "../../src/client/components/ProductDetails";
import { Application } from "../../src/client/Application";
import { Cart } from "../../src/client/pages/Cart";
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import ProviderAndRouterWrapper from "./utils/ProviderAndRouterWrapper";

const mockProduct = {
  id: 5,
  price: 56,
  name: "Generic Hat",
  color: "Teal",
  material: "Soft",
  description:
    "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
};

const mockCart = {
  1: {
    name: "Small Shirt",
    price: 97,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    color: "Purple",
    material: "Soft",
    count: 2,
  },
  2: {
    name: "Gorgeous Mouse",
    price: 52,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients",
    color: "Cyan",
    material: "Plastic",
    count: 3,
  },
};

describe("Simple Test Case", () => {
  it("Для товара отображается название, цена и ссылка на страницу с подробной информацией о товаре", () => {
    render(
      <ProviderAndRouterWrapper>
        <ProductItem product={mockProduct} />
      </ProviderAndRouterWrapper>
    );

    const name = screen.queryByText(mockProduct.name);
    const price = screen.queryByText(`$${mockProduct.price}`);
    const link = screen.queryByText("Details");

    expect(name).toBeVisible();
    expect(price).toBeVisible();
    expect(link).toHaveAttribute("href", `/catalog/${mockProduct.id}`);
  });

  it("На странице с подробной информацией отображаются: название товара, его описание, цена, цвет, материал и кнопка 'добавить в корзину'", () => {
    render(
      <ProviderAndRouterWrapper>
        <ProductDetails product={mockProduct} />
      </ProviderAndRouterWrapper>
    );
    const name = screen.queryByText(mockProduct.name);
    const price = screen.queryByText(`$${mockProduct.price}`);
    const color = screen.queryByText(mockProduct.color);
    const material = screen.queryByText(mockProduct.material);
    const description = screen.queryByText(mockProduct.description);
    const cartButton = screen.queryByText("Add to Cart");

    expect(name).toBeVisible();
    expect(price).toBeVisible();
    expect(color).toBeVisible();
    expect(material).toBeVisible();
    expect(description).toBeVisible();
    expect(cartButton).toBeVisible();
  });

  it("На странице с подробной информацией отображаются: название товара, его описание, цена, цвет, материал и кнопка 'добавить в корзину'", () => {
    render(
      <ProviderAndRouterWrapper>
        <ProductDetails product={mockProduct} />
      </ProviderAndRouterWrapper>
    );
    const name = screen.queryByText(mockProduct.name);
    const price = screen.queryByText(`$${mockProduct.price}`);
    const color = screen.queryByText(mockProduct.color);
    const material = screen.queryByText(mockProduct.material);
    const description = screen.queryByText(mockProduct.description);
    const cartButton = screen.queryByText("Add to Cart");

    expect(name).toBeVisible();
    expect(price).toBeVisible();
    expect(color).toBeVisible();
    expect(material).toBeVisible();
    expect(description).toBeVisible();
    expect(cartButton).toBeVisible();
  });

  it("Если корзина пустая, должна отображаться ссылка на каталог товаров", () => {
    render(
      <ProviderAndRouterWrapper>
        <Cart />
      </ProviderAndRouterWrapper>
    );

    const catalogLink = screen.queryByText("catalog");
    expect(catalogLink).toHaveAttribute("href", "/catalog");
  });

  it("Для каждого товара в корзине должны отображаться название, цена, количество, стоимость, а также должна отображаться общая сумма заказа", () => {
    render(
      <ProviderAndRouterWrapper cart={mockCart}>
        <Cart />
      </ProviderAndRouterWrapper>
    );

    let totalPrice = 0;

    Object.entries(mockCart).forEach(([id, item]) => {
      const totalSum = item.price * item.count;
      totalPrice += totalSum;
      const itemOnScreen = screen.queryByTestId(id);
      const name = itemOnScreen.querySelector(".Cart-Name").textContent;
      const price = itemOnScreen.querySelector(".Cart-Price").textContent;
      const count = itemOnScreen.querySelector(".Cart-Count").textContent;
      const total = itemOnScreen.querySelector(".Cart-Total").textContent;

      expect(name).toBe(item.name);
      expect(price).toBe(`$${item.price}`);
      expect(count).toBe(`${item.count}`);
      expect(total).toBe(`$${totalSum}`);
    });

    const totalPriceOnScreen =
      document.querySelector(".Cart-OrderPrice").textContent;
    expect(totalPriceOnScreen).toBe(`$${totalPrice}`);
  });

  it("В шапке отображаются ссылки на страницы магазина, а также ссылка на корзину", () => {
    render(
      <ProviderAndRouterWrapper>
        <Application />
      </ProviderAndRouterWrapper>
    );
    const nav = document.querySelector('.Application-Menu');
    const catalog = within(nav).queryByText('Catalog');
    const delivery = within(nav).queryByText('Delivery');
    const contacts = within(nav).queryByText('Contacts');
    const cart = within(nav).queryByText('Cart');

    expect(catalog).toHaveAttribute("href", '/catalog');
    expect(delivery).toHaveAttribute("href", '/delivery');
    expect(contacts).toHaveAttribute("href", '/contacts');
    expect(cart).toHaveAttribute("href", '/cart');
  });

  it("Название магазина в шапке должно быть ссылкой на главную страницу", () => {
    render(
      <ProviderAndRouterWrapper>
        <Application />
      </ProviderAndRouterWrapper>
    );

    const nav = document.querySelector('.navbar');
    const home = within(nav).queryByText('Example store');

    expect(home).toHaveAttribute("href", '/');
  });
});
