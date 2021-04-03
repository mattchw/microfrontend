import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App/>, el)
}

// in dev and isolation
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')
  if (devRoot) {
    mount(devRoot)
  }
}

// if running through container
// export mount funtion
export { mount }