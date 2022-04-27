import Router from './routes'
import {Provider} from 'react-redux'
import store from './redux'
import { ToastContainer } from 'react-toastify'

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
  <>
  <Provider store={store}>
    <GlobalStyle />
    <Router/>
    <ToastContainer autoClose={3000} />
  </Provider>
  </>

  );
}