import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaProductHunt,
  FaUsers,
  FaMoneyBillAlt,
  FaBullhorn,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []); // empty dependency array to run the effect only once after the initial render

  const handleClick = (type) => {
    if (type === "") {
      navigate("/");
    } else {
      navigate(`/${type}`);
    }
  };

  return (
    <div className="sidebar">
      <div className="nav">
        <div className="navList">
          <div className="head" onClick={() => handleClick("")}>
            <FaHome className="icon" size={25} />
            {/* <div className="text">Dashboard</div> */}
          </div>
          <div className="head" onClick={() => handleClick("product")}>
            <FaProductHunt className="icon" size={25} />
            {/* <div className="text">Product</div> */}
          </div>
          <div className="head" onClick={() => handleClick("customer")}>
            <FaUsers className="icon" size={25} />
            {/* <div className="text">Customers</div> */}
          </div>
          <div className="head" onClick={() => handleClick("income")}>
            <FaMoneyBillAlt className="icon" size={25} />
            {/* <div className="text">Income</div> */}
          </div>
          <div className="head" onClick={() => handleClick("promote")}>
            <FaBullhorn className="icon" size={25} />
            {/* <div className="text">Promote</div> */}
          </div>
          <div className="head" onClick={() => handleClick("help")}>
            <FaQuestionCircle className="icon" size={25} />
            {/* <div className="text">Help</div> */}
          </div>
        </div>
        <div className="logout head" style={{ marginTop: 'auto' }}>
          <FaSignOutAlt className="icon" size={25} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
