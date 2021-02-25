import { Card, Button, Modal } from 'react-bootstrap'
import { useState } from 'react'

export const Product = ({ product, showModal }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.imgUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Button variant="primary" onClick={() => showModal(product.id)}>Checkout</Button>
      </Card.Body>
    </Card>
  )
}