import React, { Component } from 'react';
import AdminView from './AdminView'
import CartView from './CartView'

class Homepage extends Component {
    constructor() {
        super();

        this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: true,
            adminState: true,
            shoppingCart: [],
            productList: [
                {
                    productName: 'Hammer',
                    description: 'Itsa hammer',
                    price: 12.3,
                },
                {
                    productName: 'Nail',
                    description: 'Itsa nail',
                    price: 0.12,
                }
            ]
        };
    }
    _toggleAdminState = () => {
        const adminState = !this.state.adminState;
        this.setState({ adminState });
    };
    _toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({ editSaleItem });
    };
    _handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;

        this.setState({ itemCurrentlyOnSale });
    };
    _addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList];
        productList.push(newProduct);
        this.setState({ productList });
    };
    _addProductToShoppingCart = (product) => {
        const shoppingCart = [...this.state.shoppingCart];
        shoppingCart.push(product);
        this.setState({ shoppingCart });
    };
    _deleteProductFromProductList = (keyId) => {
        const productList = [...this.state.productList];
        productList.splice(keyId, 1);
        this.setState({ productList });
    };
    _deleteProductFromShoppingCart = (keyId) => {
        const shoppingCart = [...this.state.shoppingCart];
        shoppingCart.splice(keyId, 1);
        this.setState({ shoppingCart });
    };

    render() {
        return (
            <div>
                <button onClick={this._toggleAdminState}>Toggle Admin and User View
                        </button>
                <CartView shoppingCart={this.state.shoppingCart}
                    deleteProductFromShoppingCart={this._deleteProductFromShoppingCart} />
                <h1>My Hardware Store</h1>

                <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
                {this.props.adminState ? (
                    <div>
                        <span>
                            <button onClick={this._toggleEditSaleItem}>
                                {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
                            </button>
                        </span>
                        <div>
                            {this.state.editSaleItem ? <div>
                                <input onChange={this._handleItemCurrentlyOnSaleChange}
                                    value={this.state.itemCurrentlyOnSale}
                                    type="text" /></div> : null}
                        </div>
                    </div>
                )
                    : null}
                <AdminView
                    productList={this.state.productList}
                    addNewProductToProductList={this._addNewProductToProductList}
                    deleteProductFromProductList={this._deleteProductFromProductList}
                    addProductToShoppingCart={this._addProductToShoppingCart}
                    adminState={this.state.adminState} />

            </div>
        )
    }
}

export default Homepage;