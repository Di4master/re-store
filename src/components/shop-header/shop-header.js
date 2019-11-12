import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';

import './shop-header.css';

const ShopHeader = ({ orderTotal, quantityTotal }) => {
    return (
        <header className="shop-header row">
            <Link to='/'>
                <div className="logo text-dark">ReStore</div>
            </Link>
            <Link to='/cart'>
                <div className="shopping-cart pt-2">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {quantityTotal} items (${orderTotal})
                </div>
            </Link>
        </header>
    )
}

const mapStateToProps = ({ shoppingCart: { orderTotal, quantityTotal }}) => {
    return {
        orderTotal: orderTotal,
        quantityTotal: quantityTotal
    };
};

export default connect(mapStateToProps)(ShopHeader);