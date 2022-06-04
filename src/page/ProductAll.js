import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProduct = async () => {
    let searchQuery = query.get("q") || "";
    console.log("응", searchQuery);
    let url = `http://localhost:3004/products?q=${searchQuery}`;
    let reponse = await fetch(url);
    let data = await reponse.json();
    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
