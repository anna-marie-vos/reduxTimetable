const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore } = require('redux')
const reducer = require('./reducer')

// components
const App = require('./components/app')


const initialState = {
  timetable: [
    {id: 1, day: "monday", period: 2,
      subject: 'history', details:'history of the hobbit',
      classroom:'102',teacher:'Jim Beam'},
    {id: 2, day: "tuesday", period: 3,
      subject: 'maths', details:'algebra',
      classroom:'103',teacher:'professor plum'},
    {id: 3, day: "Wednesday", period: 1,
      subject: 'home room', details:'mindfulness',
      classroom:'101',teacher:'captain jack'}
  ],
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

  function render (state) {
    const root = document.querySelector('#app')
    ReactDOM.render(
      <App state={state} store={store} />,
      root
    )
  }

  render(store.getState())
})
