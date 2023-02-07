import React, { useContext } from "react";
import { Card,Button } from "react-bootstrap";
import CartContext from "../Store/CartContext";

const productsArr = [
  {
    title: "Forest Frenzy",

    price: 100000,

    imageUrl: "https://media.discordapp.net/attachments/1072573942063190018/1072582822507855952/anurag_nike_shoe_color_green_3d_hyper_realistic_lifelike_extra__42c4dcef-1226-42f9-b56f-ccd18a6607e4.png?width=559&height=559",

    id:1
  },

  {
    title: "Shadow Sprint",

    price: 500000,

    imageUrl: "https://media.discordapp.net/ephemeral-attachments/1072573942063190018/1072580493532463214/grid_0.webp?width=559&height=559",
    id:2
  },

  {
    title: "Inferno Ignite",

    price: 700000,

    imageUrl: "https://media.discordapp.net/attachments/1072573942063190018/1072593509762203718/anurag_nike_shoe_color_red_fire_3d_hyper_realistic_lifelike_ext_cd391d95-1225-4a30-b323-ee1676330c43.png?width=606&height=606",
    id:3
  },

  {
    title: "Midnight Rush",

    price: 756000,

    imageUrl: "https://media.discordapp.net/attachments/1072573942063190018/1072581719707877397/anurag_nike_shoe_color_black_3d_hyper_realistic_lifelike_extra__79335b25-1f12-481b-802a-f3680285b5a0.png?width=559&height=559",
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
    <form style={{ width: '18rem',display: " contents", flexWrap: "wrap" }} className="m-3" onSubmit={submitHandler}>
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
