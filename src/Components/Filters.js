import { useState } from "react"

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
    }

}

// ()=>setFilter(state => [...state,"4gb"])
const Filter = () =>{
    const [filter,setFilter] = useState([])
    return(<div className="filter" id="filter">
            <div className="filter-spec">
                <span>Brands</span>
                <div className="list">
                    <button>Hp</button>
                    <button>Acer</button>
                    <button>Lenovo</button>
                    <button>Asus</button>
                </div>
            </div>
            {filter}
            <div className="filter-spec">
                <span>Ram</span>
                <div className="list">
                    <button onClick={()=>fil(filter,setFilter,"4gb")}>4GB</button>
                    <button onClick={()=>fil(filter,setFilter,"8gb")}>8GB</button>
                    <button onClick={()=>fil(filter,setFilter,"16gb")}>16GB</button>
                    <button onClick={()=>fil(filter,setFilter,"32gb")}>32GB</button>
                </div>
            </div>
            <div className="filter-spec">
                <span>Price</span>
                <div className="list">
                    <button>under 20k</button>
                    <button>under 30k</button>
                    <button>under 70k</button>
                    <button>above 70k</button>
                </div>
            </div>
    </div>)
}

export default Filter