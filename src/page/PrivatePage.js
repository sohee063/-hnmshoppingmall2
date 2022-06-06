import React from "react";
import ProductDetail from "./ProductDetail";
import { Navigate } from "react-router-dom";

const PrivatePage = ({ auth }) => {
  // return auth === true ? <ProductDetail /> : <Navigate to="/login" />;
  return auth === true ? <ProductDetail /> : <ProductDetail />;
};

export default PrivatePage;
