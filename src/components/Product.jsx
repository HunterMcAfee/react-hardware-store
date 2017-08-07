import React, { Component } from 'react';

class Product extends Component {
  render() {
    const productName = this.props.productName;
    const description = this.props.description;
    const price = this.props.price;
    const keyId = this.props.keyId
    const product = this.props.product
    return (
      <div>
        <h3>{productName}</h3>
        <div>{description}</div>
        <div>{price}</div>
        {this.props.adminState ?
          <button onClick={() => {this.props.deleteProductFromProductList(keyId)}}>Delete
                        </button>
          : null}
        <button onClick={() => {this.props.addProductToShoppingCart(product)}}>Add to Cart
                        </button>
      </div>
    );

  }
}

export default Product;