const { assert } = require("chai");
const { ClientRequest } = require("http");
const { timeout } = require("rxjs");

const sizes = [575, 767, 991, 1199, 1399, 1400];

describe("test task", async function () {
  // it("Кнопка гамбургер появляется при ширине < 576px", async function () {
  //   const browser = this.browser;

  //   await browser.url("/");
  //   await browser.setWindowSize(575, 800);

  //   let burger = await browser.$(".navbar-toggler");
  //   let isDisplayed = await burger.isDisplayed();

  //   assert.ok(isDisplayed, "Гамбургер не появился при разрешении < 576px");
  // });

  // it("Меню гамбургера закрывается при клике на ссылку из меню", async function () {
  //   const browser = this.browser;

  //   await browser.url("/");
  //   await browser.setWindowSize(575, 800);

  //   let burger = await browser.$(".navbar-toggler");
  //   await burger.click();
  //   let menu = await browser.$(".navbar-collapse");
  //   await browser.$(".nav-link").click();
  //   let isDisplayed = await menu.isDisplayed();

  //   assert.ok(!isDisplayed, "Меню не закрывается при нажатии на ссылку");
  // });

  // it("Содержимое главной страницы имеет статическое содержимое", async function () {
  //   const browser = this.browser;

  //   await browser.url("/");
  //   await browser.setWindowSize(1300, 1000);
  //   await browser.assertView("plain", "body");
  // });

  // it("Содержимое страницы доставки имеет статическое содержимое", async function () {
  //   const browser = this.browser;

  //   await browser.url("/delivery");
  //   await browser.setWindowSize(1300, 1000);
  //   // await new Promise((resolve) => {
  //   //   setTimeout(() => {
  //   //     resolve();
  //   //   }, 3000);
  //   // });
  //   await browser.assertView("delivery", "body");
  // });

  // it("Содержимое страницы контакты имеет статическое содержимое", async function () {
  //   const browser = this.browser;

  //   await browser.url("/contacts");
  //   await browser.setWindowSize(1300, 1000);
  //   await browser.assertView("contacts", "body");
  // });

  // it("Отображается сообщение о том, что товар в корзине", async function () {
  //   const browser = this.browser;

  //   await browser.url("/catalog/0");
  //   await browser.$(".ProductDetails-AddToCart").click();
  //   let itemInCart = await browser.$(".CartBadge.text-success");
  //   let isDisplayedInItem = await itemInCart.isDisplayed();

  //   await browser.url("/catalog");
  //   let itemCard = await browser.$("[data-testid='0']");
  //   let isDisplayedInCatalog = itemCard.$(".CartBadge.text-success");

  //   assert.ok(
  //     isDisplayedInCatalog && isDisplayedInItem,
  //     "Не показывается сообщение о добавлении в корзину"
  //   );
  // });

  // it("Корзина не меняется при перезагрузке страницы", async function () {
  //   const browser = this.browser;

  //   await browser.url("/catalog/0");
  //   await browser.$(".ProductDetails-AddToCart").click();
  //   await browser.url("/catalog/1");
  //   await browser.$(".ProductDetails-AddToCart").click();
  //   await browser.url("/cart");
  //   const productsLength = await browser.$$(".Cart-Table tbody tr").length;
  //   await browser.refresh();
  //   const productsLengthAfterReload = await browser.$$(".Cart-Table tbody tr")
  //     .length;

  //   assert.equal(productsLength, productsLengthAfterReload);
  // });

  // it("Если товар уже добавлен в корзину, повторное нажатие кнопки 'добавить в корзину' увеличивает его количество", async function () {
  //   const browser = this.browser;

  //   await browser.url("/catalog/0");
  //   await browser.$(".ProductDetails-AddToCart").click();
  //   await browser.$(".ProductDetails-AddToCart").click();
  //   await browser.url("/cart");
  //   const count = await browser.$(".Cart-Table tbody .Cart-Count");
  //   await count.scrollIntoView();
  //   const productNum = await count.getText();

  //   assert.equal(productNum, 2);
  // });

  // it("В шапке рядом со ссылкой на корзину отображается количество не повторяющихся товаров в ней", async function () {
  //   const browser = this.browser;

  //   await browser.url("/catalog/0");
  //   await browser.$(".ProductDetails-AddToCart").click();
  //   await browser.$(".ProductDetails-AddToCart").click();
  //   await browser.url("/catalog/1");
  //   await browser.$(".ProductDetails-AddToCart").click();
  //   await browser.url("/catalog/2");
  //   await browser.$(".ProductDetails-AddToCart").click();
  //   const cartNum = await browser.$(".Application-Menu").$$("a")[3].getText();

  //   assert.equal(cartNum, "Cart (3)");
  // });

  // it("В корзине должна быть кнопка 'очистить корзину', по нажатию на которую все товары должны удаляться", async function () {
  //   const browser = this.browser;

  //   await browser.url("/catalog/0");
  //   await browser.$(".ProductDetails-AddToCart").click();
  //   await browser.$(".ProductDetails-AddToCart").click();
  //   await browser.url("/catalog/1");
  //   await browser.$(".ProductDetails-AddToCart").click();
  //   await browser.url("/cart");
  //   const clearCartButton = await browser.$(".Cart-Clear");
  //   await clearCartButton.click();
  //   const cart = await browser.$(".Cart-Table");
  //   const isDisplayed = await cart.isDisplayed();

  //   assert.ok(!isDisplayed, "Товары не удалились из корзины");
  // });

  // it("В каталоге должны отображаться товары, список которых приходит с сервера", async function () {
  //   const browser = this.browser;

  //   await browser.url("/catalog");
  //   const product = await browser.$(".ProductItem");
  //   isExisting = product.isExisting();

  //   assert.ok(isExisting, "Товары не отображаются");
  // });

  // it("В магазине есть главная страница", async function () {
  //   const browser = this.browser;

  //   await browser.url("/");
  //   const catalog = await browser.$(".Home");
  //   await catalog.waitForExist({ timeout: 3000 });
  // });

  // it("В магазине есть страница Каталог", async function () {
  //   const browser = this.browser;

  //   await browser.url("/catalog");
  //   const catalog = await browser.$(".Catalog");
  //   await catalog.waitForExist({ timeout: 3000 });
  // });

  // it("В магазине есть страница Условия доставки", async function () {
  //   const browser = this.browser;

  //   await browser.url("/delivery");
  //   const catalog = await browser.$(".Delivery");
  //   await catalog.waitForExist({ timeout: 3000 });
  // });

  // it("В магазине есть страница Контакты", async function () {
  //   const browser = this.browser;

  //   await browser.url("/contacts");
  //   const catalog = await browser.$(".Contacts");
  //   await catalog.waitForExist({ timeout: 3000 });
  // });

  // sizes.forEach((size) => {
  //   it(`Верстка главной страницы адаптируется под ${size}px`, async function () {
  //     const browser = this.browser;
  //     await browser.url("/");

  //     await browser.setWindowSize(size, 1000);
  //     await browser.assertView(`adaptive-${size}-home`, ".Application", {
  //       ignoreElements: [".nav-link"],
  //       compositeImage: false,
  //       allowViewportOverflow: true,
  //       // captureElementFromTop: false,
  //       // screenshotDelay: 500,
  //       // selectorToScroll: '.Application'
  //     });
  //   });
  // });

  // it("Верстка главной страницы адаптивна", async function () {
  //   const browser = this.browser;
  //   const sizes = [575, 767, 991, 1199, 1399, 1400];
  //   await browser.url("/");

  //   // sizes.forEach(async (size) => {
  //     await browser.setWindowSize(575, 1000);
  //     await browser.assertView(`adaptive-575-home`, ".Application", {
  //       ignoreElements: [".nav-link"],
  //       allowViewPortOverflow: true,
  //       compositeImage: true,
  //     });
  //   // });
  // });
});
