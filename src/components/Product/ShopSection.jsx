import React, { useEffect, useMemo, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import axios, { imageURL } from "../../axios";
import QuantityControl from "../Cart/QuantityControl";
import EmptyProduct from "./EmptyProduct";

const ShopSection = ({ products, mainCategoryId, subCategoryId }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(8);
  const [categorys, setCategorys] = useState([]);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const sidebarRef = useRef(null);

  // Calculate pagination details
  const { totalRows, currentPage, totalPages } = useMemo(() => {
    const totalRows = products.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    const currentPage = Math.max(0, Math.min(page, totalPages - 1));
    return { totalRows, currentPage, totalPages };
  }, [products, page, rowsPerPage]);

  // Get current category name
  const currentCategory = useMemo(() => {
    if (!mainCategoryId || mainCategoryId === "0") return "All Products";

    const mainCat = categorys.find(
      (cat) => cat.MainCategory_Id === mainCategoryId
    );
    if (!mainCat) return "Products";

    if (!subCategoryId || subCategoryId === "0") {
      return mainCat.MainCategory_Description;
    }

    const subCat = mainCat.subCategories?.find(
      (cat) => cat.Category_Id === subCategoryId
    );
    return subCat?.Category_Description || mainCat.MainCategory_Description;
  }, [categorys, mainCategoryId, subCategoryId]);

  // Fetch all categories
  useEffect(() => {
    const getAllCategory = async () => {
      const [mainCat, subCat] = await Promise.all([
        axios.get("/Master/MainCategory/GetAllactiveMainCategory"),
        axios.get("/Master/SubCategory/GetAllActiveSubCategory"),
      ]);
      const allcategories = mainCat.data.map((mcat) => {
        const subCategories = subCat.data.filter(
          (scat) => scat.MainCategory_Id === mcat.MainCategory_Id
        );
        return { ...mcat, subCategories };
      });
      setCategorys(allcategories);
    };
    getAllCategory();
  }, []);

  // Close submenus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Pagination handlers
  const handlePageChange = (newPage) => setPage(newPage);
  const handleNextPage = () => page < totalPages - 1 && setPage(page + 1);
  const handlePrevPage = () => page > 0 && setPage(page - 1);

  // Toggle submenu
  const toggleSubmenu = (mainCatId, e) => {
    e.stopPropagation();
    setActiveSubmenu(activeSubmenu === mainCatId ? null : mainCatId);
  };

  return (
    <section className="shop py-30">
      <div className="container container-lg">
        <div className="row">
          {/* Category Sidebar */}
          <div className="col-lg-2 col-12" ref={sidebarRef}>
            <div className="w-265 d-lg-block d-none flex-shrink-0">
              <div className="responsive-dropdown style-two common-dropdown nav-submenu rounded-10 p-0 submenus-submenu-wrapper shadow-none border border-gray-100 position-relative border-top-0">
                <ul className="responsive-dropdown__list scroll-sm py-8 overflow-y-auto">
                  {categorys.map((mainCat) => (
                    <li
                      key={mainCat.MainCategory_Id}
                      className={`has-submenus-submenu ${
                        activeSubmenu === mainCat.MainCategory_Id
                          ? "active"
                          : ""
                      }`}
                    >
                      <div className="d-flex align-items-center">
                        <Link
                          to={`/product/${mainCat.MainCategory_Id}/0`}
                          className="text-white text-15 py-12 px-16 flex-align gap-8 rounded-0 flex-grow-1"
                          onClick={() => setActiveSubmenu(null)}
                        >
                          {mainCat.MainCategory_Description}
                        </Link>
                        <span
                          className="icon text-md d-flex ms-auto pe-16 cursor-pointer"
                          onClick={(e) =>
                            toggleSubmenu(mainCat.MainCategory_Id, e)
                          }
                        >
                          <i
                            className={`ph ph-caret-right transition-transform duration-200 ${
                              activeSubmenu === mainCat.MainCategory_Id
                                ? "rotate-90"
                                : ""
                            }`}
                          />
                        </span>
                      </div>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeSubmenu === mainCat.MainCategory_Id
                            ? "open"
                            : ""
                        }`}
                      >
                        <h6 className="text-lg px-16 submenus-submenu__title">
                          {mainCat.MainCategory_Description}
                        </h6>
                        <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                          {mainCat.subCategories?.map((subcat) => (
                            <li key={subcat.Category_Id}>
                              <Link
                                to={`/product/${mainCat.MainCategory_Id}/${subcat.Category_Id}`}
                                className="text-dark"
                                onClick={() => setActiveSubmenu(null)}
                              >
                                {subcat.Category_Description}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {products.length !== 0 ? (
            <div className="col-lg-10 col-12 p-24">
              {/* Category Header */}
              <div className="mb-24">
                <h2 className="text-2xl fw-bold text-gray-900">
                  {currentCategory}
                </h2>
                {subCategoryId && subCategoryId !== "0" && (
                  <div className="text-md text-gray-600 mt-4">
                    Showing products in this category
                  </div>
                )}
              </div>

              {/* Results Count */}
              <div className="flex-between gap-16 flex-wrap mb-40">
                <span className="text-gray-900">
                  {totalPages > 1 &&
                    `Showing ${
                      (currentPage + 1) * rowsPerPage + 1 - rowsPerPage
                    }-${(currentPage + 1) * rowsPerPage} of`}{" "}
                  {products.length} results
                </span>
              </div>

              {/* Product Grid */}
              <div
                className="row ms-0 align-items-start"
                style={{ gap: "15px 0", minHeight: "650px" }}
              >
                {(rowsPerPage > 0
                  ? products.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : products
                )?.map((product) => (
                  <div
                    className="col-Xxl-2 col-lg-3 col-md-4 col-sm-6 col-12"
                    key={product.Product_Details_Id}
                  >
                    <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                      <div className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative">
                        <img
                          src={`${imageURL}/${product.Image}`}
                          alt=""
                          className="image-fluid"
                        />
                      </div>
                      <div className="product-card__content mt-10 w-100">
                        <h6 className="title text-md fw-semibold mb-8 text-line-2">
                          {product.Product_Details_Description}
                        </h6>
                        <div className="product-card__price mt-14">
                          <QuantityControl product={product} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <ul className="pagination flex-center flex-wrap gap-16">
                  <li className="page-item">
                    <button
                      className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                      onClick={handlePrevPage}
                      disabled={page === 0}
                    >
                      <i className="ph-bold ph-arrow-left" />
                    </button>
                  </li>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      key={index}
                      className={`page-item ${page === index ? "active" : ""}`}
                    >
                      <button
                        className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                        onClick={() => handlePageChange(index)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}

                  <li className="page-item">
                    <button
                      className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                      onClick={handleNextPage}
                      disabled={page === totalPages - 1}
                    >
                      <i className="ph-bold ph-arrow-right" />
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <EmptyProduct />
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
