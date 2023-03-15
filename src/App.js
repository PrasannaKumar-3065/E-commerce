import { createContext, useMemo, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Cart from "./Components/Cart";
import Container from "./Components/Container";
import Filter from "./Components/Filters";
import Products from "./Components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const cartContext = createContext();
export const filterContext = createContext()

const valCart = ( cart,id ) =>{
  return cart.indexOf(id) != -1
}

const addCart = (cart,updateCart,id) =>{
  let index = cart.indexOf(id)
  console.log(index)
  if(index === -1){
      updateCart([...cart,id])
  }
  else{
      let temp = [...cart]
      temp.splice(index,1);
      updateCart(temp)
  }
}


function App() {
  const items = [{"id":0,"brand":"Apple","name":"Apple Macbook","ram":"16GB","storage":"500GB","price":300,"image":"apple-macbook.jpeg"},
                   {"id":1,"brand":"Asus","name":"Asus Tuf Gaming","ram":"16GB","storage":"500GB","price":450.9,"image":"Asus-tuf.jpeg"},
                   {"id":2,"brand":"Infinix","name":"Infinix Inbook","ram":"16GB","storage":"1TB","price":606.4,"image":"infinix-inbook.jpeg"},
                   {"id":3,"brand":"Lenovo","name":"Lonovo","ram":"16GB","storage":"256GB","price":600,"image":"lenovo.jpeg"},
                   {"id":4,"brand":"Asus","name":"Asus Vivobook","ram":"16GB","storage":"1TB","price":690,"image":"asus-vivobook.jpeg"},
                   {"id":5,"brand":"Dell","name":"Dell Vostro","ram":"16GB","storage":"256GB","price":340,"image":"dell-vostro.jpeg"},
                   {"id":6,"brand":"Hp","name":"HP 14-s","ram":"16GB","storage":"256GB","price":200,"image":"hp-14s.jpeg"},
                   {"id":7,"brand":"Infinix","name":"Infinix Zerobook","ram":"16GB","storage":"1TB","price":600,"image":"infinix-zerobook.jpeg"},
                   {"id":8,"brand":"Hp","name":"HP","ram":"16GB","storage":"1TB","price":545,"image":"hp.jpeg"},
                   {"id":9,"brand":"Lenovo","name":"Lenovo Intel Celeron","ram":"16GB","storage":"1TB","price":690,"image":"lenovo-intel-celeron.jpeg"},
                   {"id":10,"brand":"Acer","name":"Acer Aspire 3","ram":"16GB","storage":"1TB","price":780,"image":"acer-aspire-3.jpeg"},
                   {"id":11,"brand":"Lenovo","name":"Lenovo Ideapad 3","ram":"16GB","storage":"1TB","price":350,"image":"lenovo-ideapad-3.jpeg"},
                   {"id":12,"brand":"Acer","name":"Acer Aspire 7","ram":"8GB","storage":"1TB","price":700,"image":"acer-aspire-7.jpeg"},
                   {"id":13,"brand":"Acer","name":"Acer Nitro 5","ram":"32GB","storage":"1TB","price":356,"image":"acer-bitro-5.jpeg"},
                   {"id":14,"brand":"Asus","name":"Asus Filpbook 14","ram":"64GB","storage":"1TB","price":244,"image":"asus-flipbook-14.jpeg"},
                   {"id":15,"brand":"Asus","name":"Asus Rog Strix G15","ram":"86GB","storage":"1TB","price":781,"image":"asus-rog-strix-g15.jpeg"},
                   {"id":16,"brand":"Dell","name":"Dell Inspiration","ram":"8GB","storage":"1TB","price":656,"image":"dell-inspiration.jpeg"},
                   {"id":17,"brand":"MSI","name":"MSI Core i9","ram":"8GB","storage":"1TB","price":444,"image":"msi-core-i9.jpeg"},
                   {"id":18,"brand":"MSI","name":"MSI Delta 15","ram":"32GB","storage":"1TB","price":256,"image":"msi-delta-15.jpeg"},
                   {"id":19,"brand":"Redmi","name":"Redmi 15 pro","ram":"16GB","storage":"1TB","price":555,"image":"redmibook-15-pro.jpeg"}
                    ]
  const [cart, updateCart] = useState([])
  const [filter,setFilter] = useState([])
  const CartMemo = useMemo(()=>{return{cart,updateCart}},[cart])
  const filterMemo = useMemo(()=>{return{filter,setFilter}},[filter])
  
  return (
    <>
      <Header />
      <filterContext.Provider value={filterMemo}>
        <cartContext.Provider value={CartMemo}>
          <BrowserRouter>
            <Nav />
            <Container>
              <Routes>
                <Route path="/" element={<><Filter /><Products addCart={addCart} valCart={valCart} items={items} /></>} />
                <Route path="/cart" element={<Cart addCart={addCart} valCart={valCart} items={items} />} />
              </Routes>
            </Container>
          </BrowserRouter>
        </cartContext.Provider>
      </filterContext.Provider>
    </>
  );
}

export default App;
