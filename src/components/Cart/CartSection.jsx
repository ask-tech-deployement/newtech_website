import React, { useContext } from "react";
import { imageURL } from "../../axios";
import cartContext from "../Context/cartContext";
import QuantityControl from "./QuantityControl";
import CartFormSection from "./CartFormSection";
import { Chip } from "@mui/material";
import EmptyCart from "./EmptyCart";

const CartSection = () => {
  const { cartItems, setCartItems, deleteCartItem } = useContext(cartContext);

  const handleCartClearConfirmation = () => {
    if (window.confirm("Do you want to clear the cart?")) {
      localStorage.removeItem("cartItems");
      setCartItems([]);
    }
  };

  const handleDeleteConfirmation = (key) => {
    if (window.confirm("Do you want to delete this item?")) {
      deleteCartItem(key);
    }
  };

  return (
    <section className="cart pt-8">
      <div className="container container-lg">
        <div className="row gy-4">
          {/* Show Total Items or Empty Cart Message */}
          {Object.keys(cartItems).length > 0 ? (
            <>
              {/* Cart Items Section */}
              <div className="col-lg-7">
                <div className="cart-table border border-gray-200 rounded-8 py-20 px-20">
                  <div
                    className="cart-items d-flex flex-column gap-10"
                    style={{ maxHeight: "70vh", overflowY: "auto" }}
                  >
                    {Object.entries(cartItems)?.map(([key, value]) => (
                      <div
                        className="d-flex align-items-start border-bottom p-10"
                        key={key}
                      >
                        {/* Product Thumbnail */}
                        <div
                          className="cart-item-thumbnail border rounded-8 flex-shrink-0"
                          style={{
                            width: "60px",
                            height: "60px",
                            marginRight: "10px",
                          }}
                        >
                          <img
                            src={`${imageURL}/${value.Image}`}
                            alt={value.Product_Details_Description}
                            style={{
                              objectFit: "contain",
                              width: "100%",
                              height: "100%",
                            }}
                            className="rounded-8"
                          />
                        </div>

                        {/* Product Details */}
                        <div style={{ flex: 1 }}>
                          <div className="fw-semibold text-start text-truncate mb-5">
                            {value.Product_Details_Description}
                          </div>

                          {/* Remove Button */}
                          <div className="text-start">
                            <Chip
                              label="Remove"
                              variant="outlined"
                              color="error"
                              size="small"
                              onClick={() => handleDeleteConfirmation(key)}
                              style={{
                                fontSize: "0.8rem",
                                padding: "2px 8px",
                              }}
                            />
                          </div>
                        </div>

                        {/* Quantity Control */}
                        <div className="text-center">
                          <QuantityControl
                            initialQuantity={value.productQuantity}
                            product={value}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="d-flex justify-content-between my-24">
                  {/* Total Items Display */}
                  <div className="col-6 text-start">
                    <h6 className="fw-bold">
                      Total Items:{" "}
                      <span className="text-primary">{Object.keys(cartItems).length}</span>
                    </h6>
                  </div>

                  {/* Clear Cart Button */}
                  <div className="col-6 text-end">
                    <button
                      className="btn btn-danger text-white py-10 px-20 rounded-4"
                      onClick={handleCartClearConfirmation}
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="col-lg-5">
                <CartFormSection />
              </div>
            </>
          ) : (
            <div className="col-12 text-center">
              <EmptyCart />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartSection;
