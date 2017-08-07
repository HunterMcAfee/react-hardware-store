import React, { Component } from 'react';
import CartProduct from './CartProduct';

class CartView extends Component {
    render() {
    const shoppingCartList = this.props.shoppingCart;

    const shoppingCartComponents = shoppingCartList.map((product, index) => {
            return <CartProduct deleteProductFromShoppingCart={this.props.deleteProductFromShoppingCart}
                addProductToShoppingCart={this.props.addProductToShoppingCart}
                productName={product.productName}
                description={product.description}
                price={product.price}
                key={index}
                keyId={index}
                adminState={this.props.adminState} />;
        });
    
    
        return (
            <div>
                <h1>Shopping Cart</h1>
                <div>
                    {shoppingCartComponents}
                </div>
            </div>
        );

    }
}

export default CartView;