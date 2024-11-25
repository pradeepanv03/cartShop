// src/App.js
import React, { useState } from 'react';
import { Container, Navbar, Badge, Nav } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import ProductList from './ProductList';
import Cartshop from './Cartshop';

function Cartshow() {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const addToCart = (product) => {
      setCart([...cart, product]);
    };

  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#" onClick={() => setShowCart(!showCart)}>
            <FaShoppingCart />
            <Badge bg="secondary">{cart.length}</Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Container>
      <ProductList addToCart={addToCart} />
      {showCart && <Cartshop cart={cart} />}
    </Container>
  </div>
  );
}

export default Cartshow;
