import React from "react";
import "./Table.css";
import tabimag1 from "../../assets/tabImag1.png";
import tabimag2 from "../../assets/tabImag2.png";
import Rating from "../RatingStar/Rating";

const data = [
  {
    image: tabimag1,
    name: "Abstract 3D",
    stock: "32 in Stock",
    price: "$ 45.99",
    totalSale: "20",
  },
  {
    image: tabimag2,
    name: "Sarphens illustrastion",
    stock: "32 in Stock",
    price: "$ 45.99",
    totalSale: "20",
  },
  // Add more data objects here
];

const feedbackData = [
  {
    title: "Item 1",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem temporibus, quos, explicabo necessitatibus ea magni fuga atque sed excepturi quis consequatur odio voluptatem eius adipisci inventore quam saepe blanditiis.",
  },
  {
    title: "Item 2",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem temporibus, quos, explicabo necessitatibus ea magni fuga atque sed excepturi quis consequatur odio voluptatem eius adipisci inventore quam saepe blanditiis.",
  },
  // Add more feedback data objects here
];

const Table = () => {
  return (
    <div className="table_parent" >
      <div className="table_first_div">
        <div className="table_head">
          {/* Your table head content */}
        </div>
        <table className="table table-hover table-bordered results blue-table">
          <thead id="tables_head">
            <tr style={{border:"none"}}>
              <th className="col-md-5 col-xs-5 p-2" style={{border:"none"}}>Product Name</th>
              <th className="col-md-3 col-xs-4 p-2" style={{border:"none"}}>Stock</th>
              <th className="col-md-3 col-xs-3 p-2" style={{border:"none"}}>Price</th>
              <th className="col-md-3 col-xs-3 p-2" style={{border:"none"}}>Total Sale</th>
            </tr>
          </thead>
          <tbody style={{border:"none"}}>
            {data.map((item) => (
              <tr key={item.name} style={{color:"grey"}}>
                <td style={{border:"none"}}>
                  <div className="tabple_product">
                    <div>
                      <img src={item.image} alt="" />
                    </div>
                    <div>
                      <strong>{item.name}</strong>
                      <br />
                      <p style={{ color: "GrayText" }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{border:"none"}}>{item.stock}</td>
                <td style={{border:"none"}}>{item.price}</td>
                <td style={{border:"none"}}><Button variant="contained" className="button" color="success">Delivered</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table_card">
        <div className="card_p_table_text p-2">
          <h3 className="text-white">Customer's Feedback</h3>
          {feedbackData.map((item) => (
            <div key={item.title}>
              <div>
                <img src={""} />
                <span className="p-2 text-white menu_text">{item.title}</span>
              </div>
              <Rating />
              <p className="card-text text-white">{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
