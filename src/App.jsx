import { useState } from "react";
import "./App.css";
// import ApexChart from "./component/chart/Chart"
import Sidebar from "./component/SideBar/Sidebar";
// import Layout from "./component/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./page/DashBoard/DashBoard";
import Product from "./page/Product/Product";
import Promote from "./page/Promote/Promote";
import Customers from "./page/Customers/Customers";
import Income from "./page/Income/Income";
import Help from "./page/Help/Help";
import Header from "./component/Header/Header";
// import "@picocss/pico"
import "bootstrap";
import "react-bootstrap";

function App() {
  // const [count, setCount] = useState(0)



  return (
  <>
    <Header />
    <BrowserRouter>
        <Sidebar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customer" element={<Customers />} />
        <Route path="/income" element={<Income />} />
        <Route path="/promote" element={<Promote />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
