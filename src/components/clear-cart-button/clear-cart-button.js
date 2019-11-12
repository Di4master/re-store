import React from 'react';
import { connect } from 'react-redux';
import { clearedCart } from '../../actions';

const ClearCartButton = ( { onClearCart, shoppingCart } ) => {
    return (
        <button
            onClick={() => onClearCart(shoppingCart)}
            className="btn btn-warning">
            Clear cart
        </button>
    )
};

const mapStateToProps = ({ shoppingCart }) => {
    return {
        shoppingCart
    };
};

const mapDispatchToProps = {
    onClearCart: clearedCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearCartButton);