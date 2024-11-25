import React from 'react'
import { ListGroup } from 'react-bootstrap';

export default function Cartshop({ cart }) {
  return (
    <div>
      <h2>Cart</h2>
      <ListGroup>
        {cart.map((item, index) => (
          <ListGroup.Item key={index}>
            {item.name} - ${item.price}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
     )
}
