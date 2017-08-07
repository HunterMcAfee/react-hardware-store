import React, { Component } from 'react';

class CartProduct extends Component {
  render() {
    const productName = this.props.productName;
    const description = this.props.description;
    const price = this.props.price;
    const keyId = this.props.keyId
    
    return (
      <div>
        <h3>{productName}</h3>
        <div>{description}</div>
        <div>{price}</div>
          <button onClick={() => {this.props.deleteProductFromShoppingCart(keyId)}}>Remove from Cart
                        </button>
      </div>
    );

  }
}

export default CartProduct;