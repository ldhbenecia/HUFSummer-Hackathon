import { ProductListHeader } from "components/ProductList/Header/Header";
import React from "react";
import ProductList from "../../components/ProductList/ProductList";

const ProductListPage = () => {
  return (
    <div>
      <ProductListHeader />
      <ProductList />
    </div>
  );
};

export default ProductListPage;
