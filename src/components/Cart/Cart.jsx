import React from "react";
import Breadcrumb from "./Breadcrumb";
import CartSection from "./CartSection";

const Cart = () => {
  return (
    <>
      <Breadcrumb title={"Cart"} />
      <CartSection />
    </>
  );
};

export default Cart;
