const React = require('react')
const _ = require('lodash')

//components
const ProductRow = require('./product-row')
const CartRow = require('./cart-row')

module.exports = function App (props) {
  console.log('props', props)
  const { store, state } = props
  const { products, total } = state

  const productsInCart = _.filter(products, (product) => product.quantity)

  return (
    <div className="shop">
      <h1>SHOP</h1>
        <table>
          <thead>
            <tr>
              <th>ITEMS</th>
              <th>PRICE</th>
              <th>stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              _.map(products, (product) => {
                // investigate the spread operator in jsx
                return <ProductRow {...product} store={store} />
              })
            }
          </tbody>
        </table>

      <h2>CART</h2>
        <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              _.map(productsInCart, (product) => (
                <CartRow {...product} store={store} />
              ))
            }
          </tbody>
        </table>
        <p>Total : $ {total}</p>
        <button type="button" name="checkout" id="checkout">checkout</button>
    </div>
  )
}
