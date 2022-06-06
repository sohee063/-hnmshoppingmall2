import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  let { id } = useParams();
  console.log("아이디", id);
  // const [product, setProduct] = useState(null);
  const product = useSelector((state) => state.product.productDetail);
  console.log("디테일", product);
  const dispatch = useDispatch();
  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  };
  useEffect(() => {
    getProductDetail();
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
