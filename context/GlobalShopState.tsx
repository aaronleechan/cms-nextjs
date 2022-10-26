import { useReducer, useState } from 'react';
import { ADD_PRODUCT, REMOVE_PRODUCT, RESET_PRODUCT_CART, shopReducer } from './reducers';
import ShopContext from './shop-context';

interface imageInterface {
  url: String;
}

interface itemInterface {
  id: String;
  mealTime: String;
  name: String;
  otherName: String;
  regularPrice: Number;
  image: imageInterface[];
}

interface Props{
  children: any,
  items: itemInterface[]
}

const GlobalShopState = (props: Props) => {
  const { items } = props;
  const products = [...items];
  const [cart, setCart] = useState({});
  const [cartState, dispatch] = useReducer(shopReducer, { cart: {} });
  const [totalProductInCart, setTotalProductInCart] = useState(0);

  const addProductToCart = (product: any) => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };

  const removeProductFromCart = (productId: any) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  const resetProductCart = () =>{
    setTimeout(()=>{
      dispatch({type: RESET_PRODUCT_CART})
    },700)
  }

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        resetProductCart: resetProductCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalShopState;
