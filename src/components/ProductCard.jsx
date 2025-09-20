import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductCard = ({product}) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        style={{
          height: "100%",
          width: "90%",
          objectFit: "cover",
          margin: "auto",
          paddingTop: "10px",
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-center align-items-center">
          {product.name}
        </Card.Title>
        <Card.Text className="d-flex justify-content-center align-items-center">
          {product.price.toLocaleString()} VND
        </Card.Text>
        <Button
          as={Link}
          to={`/product/${product.id}`}
          variant="primary"
          className="mt-auto"
        >
          Xem chi tiết
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
