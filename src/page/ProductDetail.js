import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getPruductDetail = async () => {
    let url = `https://my-json-server.typicode.com/sohee063/-hnmshoppingmall2/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getPruductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div> ₩ {product?.price}</div>

          <div className="choice">
            {product?.choice === true ? "Conscious choice" : ""}
          </div>

          <DropdownButton id="dropdown-basic-button" title="사이즈 선택 ">
            {product?.size.map((el) => (
              <Dropdown.Item className="dropdown">{el}</Dropdown.Item>
            ))}
          </DropdownButton>

          <Button variant="dark" className="add-btn">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
