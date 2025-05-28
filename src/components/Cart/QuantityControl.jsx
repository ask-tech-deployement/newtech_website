import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cartContext from "../Context/cartContext";

const QuantityControl = ({ initialQuantity = 1, product }) => {
  const { addToCart, cartItems } = useContext(cartContext);
  const [quantity, setQuantity] = useState(
    cartItems[product?.Product_Details_Id]?.productQuantity || initialQuantity
  );

  const handleAddOrUpdateCart = () => {
    addToCart(product, quantity);
    const action = Object.keys(cartItems).includes(product?.Product_Details_Id)
      ? "updated"
      : "added to";
    toast.success(`Product successfully ${action} the cart!`, {
      position: "top-right", // Use string instead of constant
    });
  };

  const incrementQuantity = () => setQuantity(Number(quantity) + 1);
  const decrementQuantity = () =>
    setQuantity(quantity > 1 ? Number(quantity) - 1 : quantity);

  return (
    <>
      <div className="d-flex rounded-4 overflow-hidden">
        <button
          type="button"
          onClick={decrementQuantity}
          className="quantity__minus border border-end border-gray-100 flex-shrink-0 h-40 w-48 text-neutral-600 flex-center hover-bg-main-600 hover-text-white"
        >
          <i className="ph ph-minus" />
        </button>
        <input
          type="number"
          className="quantity__input flex-grow-1 border border-gray-100 border-start-0 border-end-0 text-center w-32 px-4"
          value={quantity}
          min={1}
          onChange={(e) => {
            if (/^[0-9]*$/.test(e.target.value))
              setQuantity(Number(e.target.value) === 0 ? 1 : e.target.value);
          }}
        />
        <button
          type="button"
          onClick={incrementQuantity}
          className="quantity__plus border border-end border-gray-100 flex-shrink-0 h-40 w-48 text-neutral-600 flex-center hover-bg-main-600 hover-text-white"
        >
          <i className="ph ph-plus" />
        </button>
      </div>
      <button
        className="btn-outline-main product-card__cart btn w-100 mt-14 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium w-100"
        tabIndex={0}
        onClick={handleAddOrUpdateCart}
        style={{ whiteSpace: "nowrap" }}
      >
        {!Object.keys(cartItems).includes(product?.Product_Details_Id)
          ? "Add To "
          : "Update "}
        Quote
        <i className="ph ph-shopping-cart" />
      </button>
    </>
  );
};

export default QuantityControl;
