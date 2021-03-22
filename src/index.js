import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter}  from 'react-router-dom'
import {Provider} from 'react-redux'
import {ConfigProvider} from 'antd'
import fa from 'antd/es/locale/fa_IR'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store'
// import $ from 'jquery';
// import Popper from 'popper.js';


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <ConfigProvider direction="rtl" locale={fa}>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
