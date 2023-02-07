import React ,{useContext}from "react";
import { Button, Modal } from "react-bootstrap";

import CartContext from "../Store/CartContext";


const Cart = (props) => {
  const context=useContext(CartContext)

  const totalAmount= `${context.totalAmount.toFixed(2)}rs`

  const hasItems=context.products.length>0;

  const cartRemove=(ele)=>{
    context.removeItem(ele)
  }


  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.onHide}
        // backdrop={props.backdrop}
        keyboard={props.keyboard}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <h2 style={{ marginLeft: "40%" }}>Cart</h2>
            <div>
              <h3
                style={{ display: "inline-block", textAlign: "left" }}
                className="m-4"
              >
                Items
              </h3>
              <h3
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  margin: "2.5rem",
                }}
              >
                Title
              </h3>
              <h3
                style={{
                  display: "inline-block",
                  textAlign: "right",
                  margin: "2.5rem",
                }}
              >
                Price
              </h3>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ maxHeight:'20rem',overflow:'scroll'}}  >
          {context.products.map((ele,index) => (
            <ul style={{ display: "flex"}} key={Math.random()}>
              <li style={{ listStyle: "none" }}>
                <span style={{ display: "flex" }} className="mt-lg-4">
                  <img src={ele.imageUrl} style={{ width: "20%" }} alt="items"></img>
                  <h4 style={{ width: "20%", marginLeft: "10%" }}>
                    {ele.title}
                  </h4>
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: "5%",
                      fontFamily: "fantasy",
                    }}
                  >
                    {ele.quantity}
                  </span>
                  <div style={{ marginLeft: "10px" }}>
                    <Button className="btn btn-danger p-2" onClick={()=>cartRemove(ele)}>Remove</Button>
                  </div>
                </span>
              </li>
            </ul>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <div style={{textAlign:"center"}} className="m-3"><h3>TOTAL AMOUNT</h3>
          <h4 style={{color:"lightcoral"}}>{totalAmount}</h4>
          </div>
          <Button variant="secondary" onClick={props.onClick}>
            Close
          </Button>
         {hasItems && <Button variant="success">PURCHASE</Button>}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
