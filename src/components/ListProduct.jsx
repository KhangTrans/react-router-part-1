import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ListProduct = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Iphone 14 Pro Max",
      price: 30000000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/289702/iphone-14-pro-max-tim-thumb-600x600.jpg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      price: 25000000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/301796/samsung-galaxy-s23-ultra-thumb-den-600x600.jpg",
    },
    {
      id: 3,
      name: "Xiaomi Mi 13 Pro",
      price: 20000000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/309816/xiaomi-13t-pro-xanh-thumb-600x600.jpg",
    },
    {
      id: 4,
      name: "Oppo Find X5 Pro",
      price: 15000000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/250622/oppo-find-x5-pro-trang-thumb-1-600x600.jpg",
    },
    {
      id: 5,
      name: "Vivo X80 Pro",
      price: 10000000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/260149/vivo-x80-pro-thumb-1-600x600.jpg",
    },
    {
      id: 6,
      name: "Iphone 16 Plus",
      price: 5000000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/329138/iphone-16-plus-xanh-mong-ket-thumbtgdd-600x600.png",
    },
  ]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const keyword = searchParams.get("name") || "";

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(keyword.toLowerCase())
  );
  const handleSearch = () => {
    setSearchParams({ name: search });
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">List products</h1>

      {/* Form tìm kiếm */}
      <Form className="d-flex mb-4 justify-content-end">
        <Form.Control
          type="text"
          placeholder="Tìm kiếm theo tên..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: "300px", marginRight: "10px" }}
        />
        <Button variant="primary" onClick={handleSearch}>
          Tìm kiếm
        </Button>
      </Form>

      {/* Grid sản phẩm */}
      {filteredProducts.length === 0 ? (
        <div className="text-center text-muted py-5">Không tìm thấy sản phẩm rồi!</div>
      ) : (
        <Row>
          {filteredProducts.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ListProduct;
