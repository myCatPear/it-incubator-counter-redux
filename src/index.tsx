import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CounterContainer} from "./containers/CounterContainer";
import {Provider} from "react-redux";
import { store } from './redux/store';
import {createRoot} from "react-dom/client";

const container = document.getElementById('root');
const root = createRoot(container!)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <CounterContainer />
        </Provider>
    </React.StrictMode>
)
// ReactDOM.render(
//   <React.StrictMode>
//       <Provider store={store}>
//           <CounterContainer />
//       </Provider>
//
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
