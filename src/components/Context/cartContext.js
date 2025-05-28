import { createContext, useCallback, useEffect, useState } from "react";

const cartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [searchFilter, setSearchFilter] = useState("");
  // Progress Loading State
  const [openLoader, setOpenLoader] = useState(false);

  // Loading Handlers
  const showLoading = useCallback(() => {
    setOpenLoader(true);
  }, []);

  const hideLoading = useCallback(() => {
    setOpenLoader(false);
  }, []);

  useEffect(() => {
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || {};
    setCartItems(existingCartItems);
  }, []);

  const addToCart = (product, qty) => {
    const newCartItem = {
      [product.Product_Details_Id]: { ...product, productQuantity: qty },
    };
    const updatedCartItems = { ...cartItems, ...newCartItem };
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const deleteCartItem = (productId) => {
    const CartItems = { ...cartItems };
    delete CartItems[productId];
    setCartItems(CartItems);
    localStorage.setItem("cartItems", JSON.stringify(CartItems));
  };

  const filterClickHandler = (filtertext) => {
    setSearchFilter(filtertext);
  };

  return (
    <cartContext.Provider
      value={{
        addToCart,
        cartItems,
        setCartItems,
        deleteCartItem,
        searchFilter,
        filterClickHandler,
        openLoader,
        showLoading,
        hideLoading,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default cartContext;
