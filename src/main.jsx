import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// const domContainer = document.querySelector('#app');
// ReactDOM.render(<ApexChart />, domContainer);

// var chart = new ApexCharts(document.querySelector("#chart"), options);
//       chart.render();
