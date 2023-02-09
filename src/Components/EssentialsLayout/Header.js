import React, { useContext, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import Cart from "../Cart/Cart";
import CartContext from "../Store/CartContext";
import { FaShoppingCart,FaAmazon } from "react-icons/fa";

const Header = () => {
const context=useContext(CartContext)
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  const totalNumber=context.products.reduce((acc,cur)=>{
    return acc+cur.quantity;
  },0)




   
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
            <FaAmazon></FaAmazon>
          {' '}
        Shopping
          </Navbar.Brand>
      </Container>
      <Button variant="light" style={{marginRight:"40px", borderRadius: "10px",backgroundColor:"gray"}} onClick={handleShow}>
  <FaShoppingCart></FaShoppingCart> <span style={{backgroundColor: "red", color: "white", borderRadius: "50%", width: "20px", height: "20px", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "14px"}}>{totalNumber}</span>
</Button>

      <Cart
        show={show}
        onHide={handleClose}
      //   backdrop="static"
        keyboard={false}
        onClick={handleClose}
      />
    </Navbar>
  );
};

export default Header;
