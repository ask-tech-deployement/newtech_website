import React, { useContext } from "react";
import { imageURL } from "../../axios";
import cartContext from "../Context/cartContext";
import QuantityControl from "./QuantityControl";
import { MdDelete } from "react-icons/md";
import CartFormSection from "./CartFormSection";

const CartSection = () => {
  const { cartItems, setCartItems, deleteCartItem } = useContext(cartContext);

  const handleCartClearConfirmation = () => {
    if (window.confirm("Do you want to clear the cart?")) {
      localStorage.removeItem("cartItems");
      setCartItems([]);
    }
  };

  return (
    <section className="cart py-40">
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-xl-9 col-lg-8">
            <div className="cart-table border border-gray-100 rounded-8  py-28">
              <div className=" scroll-sm scroll-sm-horizontal">
                <div className="row text-center mb-20 d-none d-sm-flex">
                  <p className="h6 mb-0 text-lg fw-bold col-4">Product Name</p>
                  <p className="h6 mb-0 text-lg fw-bold col-4">Quantity</p>
                  <p className="h6 mb-0 text-lg fw-bold col-4">Delete</p>
                </div>
                <div
                  className="cart-items overflow-y-auto overflow-x-hidden d-flex flex-column gap-20"
                  style={{ maxHeight: "70vh" }}
                >
                  {Object.entries(cartItems)?.map(([key, value]) => (
                    <div className="row align-items-center " key={key}>
                      <div className=" col-sm-4 table-product d-flex flex-column align-items-center justify-content-center">
                        <div
                          className="table-product__thumb border border-gray-100 rounded-8 flex-center"
                          style={{
                            maxWidth: "70px",
                            maxHeight: "70px",
                            border: "1px solid #dee2e6",
                          }}
                        >
                          <img
                            src={`${imageURL}/${value.Image}`}
                            alt=""
                            style={{
                              objectFit: "contain",
                            }}
                            className="border border-gray-100"
                          />
                        </div>
                      </div>

                      <div className="col-sm-4 py-sm-0 py-20">
                        <div className="table-product__content text-center text-sm-start mt-20 mt-sm-0">
                          <h6 className="title text-lg fw-semibold mb-8 text-line-2">
                            {value.Product_Details_Description}
                          </h6>
                        </div>
                        <QuantityControl
                          initialQuantity={value.productQuantity}
                          product={value}
                        />
                      </div>
                      <div className="col-sm-4 text-center">
                        <MdDelete
                          cursor={"pointer"}
                          onClick={() => {
                            deleteCartItem(key);
                          }}
                          size={"30px"}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <CartFormSection />
        </div>
      </div>
    </section>
  );
};

export default CartSection;
