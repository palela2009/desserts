import {AddToCart , RemoveItem} from "./Icons"
import './App.css'
import dessertProducts from "./data.json"
const BASE_URL  ="https://res.cloudinary.com/dc2c49xov/desserts/"
function App() {
  return (
    <>
    <div>
    <h1>Desserts</h1>
   {dessertProducts.map((dessert) => {
    return <div><p key= {dessert.name}><img src={BASE_URL + dessert.images.desktop} /><div className="button"><button className="addtocart"><AddToCart/>
    <h5 className="addtocarttext">Add to Cart</h5></button></div><div><h2>{dessert.category}</h2><h1>{dessert.name}</h1><h2>${dessert.price}</h2></div></p></div>
   })}
  </div>
  <div className="cart"><h1 className="carttext">Your Cart({})</h1>
    <div></div>
  
  </div>

  
  </>
  )
}

export default App
