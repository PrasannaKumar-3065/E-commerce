
//rating
import { useContext } from "react"
import Card from "./Card"
import { cartContext, filterContext } from "../App"

const Products = (props) =>{
    const {cart, updateCart} = useContext(cartContext)
    const {filter, setFilter} = useContext(filterContext)
    return (<div className="products">
        {props.items.map(prod => {
            if(filter.length === 0){
                return <Card className="card"><div><img width="100px" height="100px" src = {require("../images/"+prod.image) }/></div><div className="card-details"><p>{prod.name}</p><p><b>{"$"+prod.price}</b></p><button onClick={()=>props.addCart(cart,updateCart,prod.id)}>{props.valCart(cart,prod.id)?"Remove from cart":"Add to cart"}</button></div></Card>
            }
            else{   
                if(filter.indexOf(prod.brand) != -1 || filter.indexOf(prod.ram) != -1 || filter.indexOf(prod.storage) != -1){
                    return <Card className="card"><div><img width="100px" height="100px" src = {require("../images/"+prod.image) }/></div><div className="card-details"><p>{prod.name}</p><p><b>{"$"+prod.price}</b></p><button  onClick={()=>props.addCart(cart,updateCart,prod.id)}>{props.valCart(cart,prod.id)?"Remove from cart":"Add to cart"}</button></div></Card>
                }
            }
        })}
    </div>)
}

export default Products