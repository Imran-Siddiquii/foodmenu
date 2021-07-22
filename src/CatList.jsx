import React from 'react'

const CatList = ({filter,catItem}) => {
    return (
        <>
         <div className="menu-tabs container">
            <div className="menu-tab d-flex justify-content-around">
                {/* <button className="btn btn-warning"  onClick={()=>setitem(Sdata)}  >All</button> */}
                {catItem.map((elc,index)=>{
                   return <button className="btn btn-warning" key={index} onClick={()=>filter(elc)}>{elc}</button>
                })}
                {/* <button className="btn btn-warning" onClick={()=>filter("Lunch")}>Lunch</button>
                <button className="btn btn-warning"  onClick={()=>filter("Dinner")}>Dinner</button> */}
            </div>
        </div>
          
        </>
    )
}

export default CatList
