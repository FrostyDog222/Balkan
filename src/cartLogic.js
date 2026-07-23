// Pure cart operations — no React, easy to reason about and test.
import { priceToNumber } from "./data";

export function addItem(cart, product) {
  const existing = cart.find((item) => item.name === product.name);
  if (existing) {
    return cart.map((item) =>
      item.name === product.name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [
    ...cart,
    { ...product, quantity: 1, priceValue: priceToNumber(product.price) },
  ];
}

export function incItem(cart, name) {
  return cart.map((item) =>
    item.name === name ? { ...item, quantity: item.quantity + 1 } : item
  );
}

export function decItem(cart, name) {
  return cart
    .map((item) =>
      item.name === name ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0);
}

export function removeItem(cart, name) {
  return cart.filter((item) => item.name !== name);
}

export function cartCount(cart) {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

export function cartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.priceValue * item.quantity, 0);
}
