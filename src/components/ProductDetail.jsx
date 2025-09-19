import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();

  const products = JSON.parse(localStorage.getItem("products")) || [];
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-5">Product not found</div>;
  }

  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        {/* Cột ảnh sản phẩm */}
        <Col md={6} className="mb-4 mb-md-0 text-center">
          <Card className="shadow-sm">
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.name}
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </Card>
        </Col>

        {/* Cột thông tin sản phẩm */}
        <Col md={6}>
          <p>id: {product.id}</p>
          <p>ProductName: {product.name}</p>
          <p className="d-flex justify-content-start">
            Price: {product.price.toLocaleString()} đ
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
