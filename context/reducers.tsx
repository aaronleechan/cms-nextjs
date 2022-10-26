export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const GET_TOTAL_PRODUCT = 'GET_TOTAL_PRODUCT';
export const RESET_PRODUCT_CART = 'RESET_PRODUCT_CART'

const addProductToCart = (product: any, state: any) => {
  const { id, image, name, regularPrice } = product;

  const updatedCart = { ...state.cart };

  if (updatedCart[id]) {
    let existingProduct = updatedCart[id];
    existingProduct.count += 1;
    existingProduct.totalPrice = Number(
      regularPrice * existingProduct.count
    ).toFixed(2);
    updatedCart[id] = existingProduct;
  } else {
    let newProd = {
      imageUrl: image ? image[0].url : null,
      name: name,
      price: regularPrice,
      count: 1,
      totalPrice: Number(regularPrice * 1).toFixed(2),
    };
    updatedCart[id] = newProd;
  }
  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId: any, state: any) => {
  const updatedCart = { ...state.cart };
  if (updatedCart[productId]) {
    const { price } = updatedCart[productId];
    let existingProduct = updatedCart[productId];
    existingProduct.count =
      existingProduct.count > 0 ? existingProduct.count - 1 : 0;
    existingProduct.totalPrice = Number(price * existingProduct.count).toFixed(
      2
    );
    updatedCart[productId] = existingProduct;
  }
  return { ...state, cart: updatedCart };
};

const resetProductCart = (state: any) => {
  return { ...state, cart: [] }
}

export const shopReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    case RESET_PRODUCT_CART:
      return resetProductCart(state)
    default:
      return state;
  }
};
