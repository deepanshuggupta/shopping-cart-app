import { Row, Col, Modal, Button } from 'react-bootstrap'
import { Product } from './Product'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'

const ProductListComponent = ({ products, getProducts, selectedProductId, setSelectedProduct }) => {

    useEffect(() => {
        getProducts()
    })

    const handleModalClick = (id) => {
        setSelectedProduct(id)
    }
    const getProductList = () => {
        return products.map((product, i) =>
            <Col sm={3} key={i}>
                <Product product={product} showModal={handleModalClick} />
            </Col>
        )
    }

    const renderModal = () => {
        return (
            <Modal.Dialog onHide={() => handleModalClick(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleModalClick(null)}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }

    return (
        <Row>
            {getProductList()}
            {selectedProductId !== null && renderModal()}
        </Row>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products,
        selectedProductId: state.selectedProductId
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch({ type: 'SET_PRODUCTS' }),
        setSelectedProduct: (id) => dispatch({ type: 'SET_PRODUCTS_ID', id })
    };
};

export const ProductList = connect(mapStateToProps, mapDispatchToProps)(ProductListComponent)