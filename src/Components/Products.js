import { useContext } from "react"
import Card from "./Card"
import { cartContext } from "../App"

const valCart = ( cart,id ) =>{
    for(let item of cart){
        if(item.id === id){
            return true
        }
    }
    return false
}

const addCart = (cart,updateCart,id) =>{
    let index = cart.indexOf(id)
    if(index === -1){
        updateCart([...cart,id])
    }
    else{
        let temp = [...cart]
        temp.splice(index,1);
        updateCart(temp)
    }
}

const Products = () =>{
    const items = [{"id":1,"name":"Apple Macbook","price":3000,"image":"apple-macbook.jpeg"},
                   {"id":2,"name":"Asus Tuf Gaming","price":3000,"image":"Asus-tuf.jpeg"},
                   {"id":3,"name":"Infinix Inbook","price":3000,"image":"infinix-inbook.jpeg"},
                   {"id":4,"name":"Lonovo","price":3000,"image":"lenovo.jpeg"},
                   {"id":5,"name":"Asus Vivobook","price":3000,"image":"asus-vivobook.jpeg"},
                   {"id":5,"name":"Dell Vostro","price":3000,"image":"dell-vostro.jpeg"},
                   {"id":5,"name":"HP 14-s","price":3000,"image":"hp-14s.jpeg"},
                   {"id":5,"name":"Infinix Zerobook","price":3000,"image":"infinix-zerobook.jpeg"},
                   {"id":5,"name":"HP","price":3000,"image":"hp.jpeg"},
                   {"id":5,"name":"Lenovo Intel Celeron","price":3000,"image":"lenovo-intel-celeron.jpeg"},
                   {"id":5,"name":"Acer Aspire 3","price":3000,"image":"acer-aspire-3.jpeg"},
                   {"id":5,"name":"Lenovo Ideapad 3","price":3000,"image":"lenovo-ideapad-3.jpeg"}
                    ]
    const {cart, updateCart} = useContext(cartContext)
    return (<div className="products">
        {items.map(prod => <Card><div><img width="100px" height="100px" src = {require("../images/"+prod.image) }/></div><div className="card-details"><p>{prod.name}</p><p>{prod.price}</p><button onClick={addCart(cart,updateCart,prod.id)}>{valCart(cart,prod.id)?"Remove from cart":"Add to cart"}</button></div></Card>)}
    </div>)
}

export default Products