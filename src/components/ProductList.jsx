import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    render() {
        const productList = this.props.productList;

        console.log(productList);

        const productComponents = productList.map((product, index) => {
            return <Product deleteProductFromProductList={this.props.deleteProductFromProductList}
                product={product}
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
                {productComponents}
            </div>
        );

    }
}

export default ProductList;