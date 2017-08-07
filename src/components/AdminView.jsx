import React, { Component } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

class AdminView extends Component {
    render() {
        const productList = this.props.productList;

        return (
            <div>
                {this.props.adminState ? (<h1>Admin View</h1>) : (<h1>User View</h1>)}
                <h2>Products</h2>
                <ProductList
                    productList={productList}
                    deleteProductFromProductList={this.props.deleteProductFromProductList}
                    addProductToShoppingCart={this.props.addProductToShoppingCart}
                    adminState={this.props.adminState} />
                {this.props.adminState ?
                    (<div><h2>Create a New Product</h2>
                        <ProductForm addNewProductToProductList={this.props.addNewProductToProductList} /></div>)
                    : null}
            </div>

        )
    }
};

export default AdminView;