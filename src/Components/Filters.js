import { useContext, useEffect, useState } from "react"
import { filterContext } from "../App"
const fil = (filter,setFilter,name) =>{
    let index = filter.indexOf(name) 
    if(index == -1){
        setFilter(state => [...state,name])
    }
    else{
        let temp = [...filter]
        temp.splice(index,1)
        console.log(temp)
        setFilter(temp)
        document.getElementById(name).style.backgroundColor = "white"
    }
}

// ()=>setFilter(state => [...state,"4gb"])
const Filter = () =>{
     const {filter,setFilter} = useContext(filterContext)

     useEffect(()=>{
        filter.map(item=>document.getElementById(item).style.backgroundColor = "#fd8d2b")
     },[filter,setFilter])
    return(<div className="filter" id="filter">
            <div className="filter-spec">
                <span>Brands</span>
                <div className="list">
                    <button id="Hp" onClick={()=>fil(filter,setFilter,"Hp")}>Hp</button>
                    <button id="Acer" onClick={()=>fil(filter,setFilter,"Acer")}>Acer</button>
                    <button id="Lenovo" onClick={()=>fil(filter,setFilter,"Lenovo")}>Lenovo</button>
                    <button id="Asus" onClick={()=>fil(filter,setFilter,"Asus")}>Asus</button>
                    <button id="Apple" onClick={()=>fil(filter,setFilter,"Apple")}>Apple</button>
                </div>
            </div>
            <div className="filter-spec">
                <span>Ram</span>
                <div className="list">
                    <button id="4GB" onClick={()=>fil(filter,setFilter,"4GB")}>4GB</button>
                    <button id="8GB" onClick={()=>fil(filter,setFilter,"8GB")}>8GB</button>
                    <button id="16GB" onClick={()=>fil(filter,setFilter,"16GB")}>16GB</button>
                    <button id="32GB" onClick={()=>fil(filter,setFilter,"32GB")}>32GB</button>
                </div>
            </div>
            <div className="filter-spec">
                <span>Storage</span>
                <div className="list">
                    <button id="1TB" onClick={()=>fil(filter,setFilter,"1TB")}>1TB</button>
                    <button id="5ooGB" onClick={()=>fil(filter,setFilter,"500GB")}>500GB</button>
                    <button id="256GB" onClick={()=>fil(filter,setFilter,"256GB")}>256GB</button>
                </div>
            </div>
    </div>)
}

export default Filter