import React from 'react'

const MenuList = ({items}) => {
    return (
        <>
         <div className="menu-item mt-5 container">
                  <div className="row">
                      <div className="col-12 mx-auto">
                          <div className="row my-5">
                          {items.map((elem,index)=>{
            const{id,name,image,category,price,description}=elem;
            return(
            <div className="col-12 col-md-6 col-lg-6 col-xl-4" key={index}>
                                  <div className="row items-inside">
                                      {/* for image */}
                                      <div className="col-12 col-md-12 col-lg-4 img_div">
                                          <img src={image} alt="menu pic"  className="img-fluid"/>
                                      </div>
                                      <div className="col-12 col-md-12 col-lg-8 ">
                                          <div className="main-title pt-4 pb-3">
                                              <h1>{name}</h1>
                                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, tempora!</p>
                                          </div>
                                          <div className="price-book">
                                              <div className="price-book-divide d-flex justify-content-between">
                                                  <h2>{price}</h2>
                                                  <a href="#">
                                                      <button className="btn btn-primary">Order Now</button>
                                                  </a>
                                              </div>
                                              <p>*price may very on selected date.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>

            )
        }) 
        }
                     </div>
                      </div>
                  </div>
              </div>     
        </>
    )
}

export default MenuList
