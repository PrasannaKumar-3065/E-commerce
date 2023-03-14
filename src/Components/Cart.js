import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../App"
import Card from "./Card"
const Cart = (props) =>{
    const prod = props.items
    const [total,setTotal] = useState(0)
    const {cart, updateCart} = useContext(cartContext)
    const checkout = (cart,updateCart,id) =>{
        alert("Ckeckout Completed")
        props.addCart(cart,updateCart,id)
    }

    const handleTotal = () =>{
        let count = 0;
        cart.map(items => count+=prod[items].price)
        setTotal(count)
    }
    useEffect(()=>{
        console.log(total)
        handleTotal()
    },[cart,updateCart])
    return(<><Link to={"/"}><button className="back">←</button></Link><div className="cart-page">
        {cart.map( item => 
            <Card className="cart-items">
                <div>
                    <img width="100px" height="100px" src = {require("../images/"+prod[item].image) }/>
                </div>
                <div className="cart-title">
                    <p>{prod[item].brand+":"+prod[item].name}</p><p><b>{"$"+prod[item].price}</b></p>
                </div>
                <div className="cart-desc">
                    <ul>
                        <li>Ram:{prod[item].ram}</li>
                        <li>Storage:{prod[item].storage}</li>
                    </ul>
                </div>
                <div className="cart-button">
                    <button onClick={()=>props.addCart(cart,updateCart,prod[item].id)}>Remove</button>
                    <button onClick={()=>checkout(cart,updateCart,prod[item].id)}>CheckOut</button>
                </div>
            </Card>)}
        </div><div className="subtotal"><span>Cart Total : {"$"+total}</span></div></>)
}

export default Cart