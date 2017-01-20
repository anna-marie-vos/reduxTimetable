const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore } = require('redux')
const reducer = require('./reducer')
const request =  require('superagent')
// components
const App = require('./components/app')


const initialState = {
  timetable: [],
  periodKey: null,
  dayKey: null,
  details: {}
}

const store = createStore(reducer, initialState)

document.addEventListener('DOMContentLoaded', () => {

  store.subscribe(() => {
    const state = store.getState()
    console.log('state', state)
    render(state)
  })

  request.get('/api/v1/timetable', (err, res) => {
    store.dispatch({type: 'UPDATE_TIMETABLE_STATE', payload: res.body})

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
