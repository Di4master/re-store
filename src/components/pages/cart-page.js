import React from 'react';

import ShoppingCartTable from '../shopping-cart-table';
import ClearCartButton from '../clear-cart-button/clear-cart-button';

const CartPage = () => {
    return (
        <div>
            <ShoppingCartTable />
            <ClearCartButton />
        </div>
    )
};

export default CartPage;