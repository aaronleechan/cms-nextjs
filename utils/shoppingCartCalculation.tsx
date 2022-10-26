interface cartProduct {
  imageUrl: string;
  name: string;
  price: number;
  count: number;
  totalPrice: number;
}

interface cartInterface {
  [key: string]: cartProduct;
}

export const totalShoppingCartProductCount = (cart: cartInterface) => {
  let total: number = 0;

  if (!Object.keys(cart) || Object.keys(cart).length == 0) {
    return total;
  }

  Object.keys(cart).map((c) => {
    total += cart[c].count;
  });

  return total;
};
