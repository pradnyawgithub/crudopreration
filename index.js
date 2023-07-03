import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App1 from './App1';
// import Form from './components/Form';
// import PropsExample from './PropsExample';
// import UseEffectDemo from './UseEffectDemo';
// import UseEffectDemo from './App2';
// import Form from './Form';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* { <App2 /> } */}
   {/* { <Form/>} */}
  {<App1/>}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
