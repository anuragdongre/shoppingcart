import React, { useContext } from "react";
import { Card,Button } from "react-bootstrap";
import CartContext from "../Store/CartContext";

const productsArr = [
  {
    title: "Shoes",

    price: 10000,

    imageUrl: "https://source.unsplash.com/200x200/?shoes",

    id:1
  },

  {
    title: "Sport Shoes",

    price: 500000,

    imageUrl: "https://source.unsplash.com/200x200/?sport%20shoes",
    id:2
  },

  {
    title: "Running Shoes",

    price: 7000,

    imageUrl: "https://source.unsplash.com/200x200/?running%20shoes",
    id:3
  },

  {
    title: "Casual Shoes",

    price: 10000,

    imageUrl: "https://source.unsplash.com/200x200/?casual%20shoes",
    id:4
  },
];





const Products = () => {
const context=useContext(CartContext)
const submitHandler=(event)=>{
  event.preventDefault()
}
const addItemToCart=(product)=>{
  console.log(product)
  context.addItem({
    title:product.title,
    id:product.id,
    quantity:1,
    imageUrl:product.imageUrl,
    price:product.price
  })

  

}
  return <React.Fragment>
  {productsArr.map((product)=>(
    <form style={{ width: '18rem',display: "inline-block", flexWrap: "wrap" }} className="m-3" onSubmit={submitHandler}>
        <Card className="shadow-lg m-5" key={Math.random()} style={{ width: '18rem',display: "inline-block", flexWrap: "wrap" }}>
            <Card.Img variant="top"  src={product.imageUrl} ></Card.Img>
            <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="success" onClick={()=>addItemToCart(product)}>Add To Cart</Button>

            </Card.Body>
        

        </Card>
    </form>
))}
  </React.Fragment>
};

export default Products;
