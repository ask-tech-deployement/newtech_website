import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import Breadcrumb from "../Cart/Breadcrumb";
import cartContext from "../Context/cartContext";
import ShopSection from "./ShopSection";

const Product = () => {
  const { mainCategoryId, subCategoryId } = useParams();
  const { searchFilter } = useContext(cartContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, [mainCategoryId, subCategoryId]);

  useEffect(() => {
    const newProduct = !searchFilter
      ? products
      : products.filter((pro) =>
          pro.Product_Details_Description?.toLowerCase()
            ?.toLowerCase()
            ?.includes(searchFilter?.toLowerCase())
        );
    setFilteredProducts(newProduct);
  }, [searchFilter,products]);

  const getProduct = async () => {
    try {
      const res = await axios.get(
        `GetProductByCatgory/${mainCategoryId}/${subCategoryId}`
      );
      setProducts(res.data);
      setFilteredProducts(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <Breadcrumb title={"Products"} />
      <ShopSection products={filteredProducts} />
    </>
  );
};

export default Product;
