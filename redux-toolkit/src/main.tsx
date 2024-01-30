import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import './index.css'
import { store } from './store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Home />
  </Provider>
);
