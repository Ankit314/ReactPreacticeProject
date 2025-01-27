import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import './cardstyle.css';


export default function Cart() {
  return (
    <div>
        <Card className="shadow-sm rounded product-card">
      <div className="position-relative">
        <Image
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
          fluid
          className="rounded-top product-image"
        />
        <Badge bg="primary" className="position-absolute top-0 start-0 m-2">
          New
        </Badge>
      </div>
      <Card.Body className="text-center">
        <Card.Title className="fw-bold mb-2">Product Name</Card.Title>
        <Card.Text className="text-muted mb-2">Category</Card.Text>
        <h5 className="text-success mb-3">$61.99</h5>
        <Button variant="outline-primary" className="w-100">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>


    </div>
  )
}
