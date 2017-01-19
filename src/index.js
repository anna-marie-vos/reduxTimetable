const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore } = require('redux')
const reducer = require('./reducer')

// components
const App = require('./components/app')


const initialState = {
  products: {
    1: {
      id: 1,
      name: 'banana',
      stock: 2,
      price:2,
      quantity: 0,
      subtotal: 0,
    }
  },

  total: 0
}

const store = createStore(reducer, initialState)

document.addEventListener('DOMContentLoaded', () => {

  store.subscribe(() => {
    const state = store.getState()
    console.log('state', state)
    render(state)
  })

  function render (state) {
    const root = document.querySelector('#app')
    ReactDOM.render(
      <App state={state} store={store} />,
      root
    )
  }

  render(store.getState())
})
