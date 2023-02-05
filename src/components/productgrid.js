import React from "react";
import { Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from "reactstrap";



const Products = (props) => {
  const handleClick = () => {
    props.addToCart(props.product);
  };

  return (
    <Col xs="12" sm="6" md="4">
      <Card>
        <CardImg top width="100%" src={props.product.image} alt="Product image" />
        <CardBody>
          <CardTitle>{props.product.name}</CardTitle>
          <CardText>{props.product.description}</CardText>
          <CardText>Price: ${props.product.price}</CardText>
          <Button onClick={handleClick}>Add to Cart</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

const ProductGrid = (props) => {
  return (
    <div className="row">
      {props.products.map((product) => (
        <Products product={product} key={product.id} addToCart={props.addToCart} />
      ))}
    </div>
  );
}

export default ProductGrid;