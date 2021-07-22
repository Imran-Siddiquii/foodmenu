import React,{useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Sdata from './IMGD';
import MenuList from './MenuList';
import CatList from './CatList';
 
const allCatVal=[...new Set(Sdata.map((elemnt)=>{
    return elemnt.category;
})),"All"]
console.log(allCatVal);  

const Menu = () => {
const [item, setitem] = useState(Sdata);
const [catItem,setCat] =useState(allCatVal);
   const filterItem=(cate)=>{
       if(cate==="All"){
           setitem(Sdata);
           return;
       }
    const data=Sdata.filter((eles)=>{
      return eles.category===cate;
    })
    setitem(data);
   }
    return (<>
        <h3 className="mt-4 text-center">Choose Your Favourite Food</h3>
        <hr />
        <CatList filter={filterItem} catItem={catItem}/>
              <MenuList items={item} />
        
         </>
    )
}

export default Menu;
