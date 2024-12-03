import {AddToCart , RemoveItem} from "./Icons"
import './App.css'
import dessertProducts from "./data.json"
const BASE_URL  ="https://res.cloudinary.com/dc2c49xov/desserts/"
function App() {
  return (
    <>
  <h1>Hello World
    <AddToCart />
  </h1>
   {/*<img src={`${BASE_URL}/brownie-mobile.jpg`}/> */}
   {dessertProducts.map((dessert) => {
    return <p key= {dessert.name}><img src={BASE_URL + dessert.images.thumbnail} /></p>
   })}
  <RemoveItem />


  </>
  )
}

export default App
