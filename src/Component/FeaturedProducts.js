import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetch_product } from '../Redux/Action.js/Action';
import FeaturedProductsSingle from './FeaturedProductsSingle';

function FeaturedProducts() {

    var loading = useSelector((state)=>state.loading_product)
    var arr_product = useSelector((state)=>state.data_product)
    var error = useSelector((state)=>state.error_product)
    var category = useSelector((state)=>state.current_category)
    var dispatch = useDispatch();
  
  console.log(arr_product)
  console.log(arr_product.category)
  
    useEffect(()=>{   
      if(arr_product.length==0) {
        dispatch(fetch_product());  
      } 
       
     
    },[]);
    var arr_p_byCategory = [];
    if(category!=0){
      arr_p_byCategory = arr_product.filter(e=>e.category.toUpperCase()==category.toUpperCase())
    }

    if(loading==true){
      return (
        <h2>Product Loading....</h2>
      )
    }else if(arr_product.length !=0){
      return (
        <>
          <>
      {/* Products Start */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Featured Products</span>
        </h2>
        <div className="row px-xl-5">
        {
          arr_p_byCategory.map((em,index)=><FeaturedProductsSingle key={index} products={em} />)
        }        
        </div>
      </div>
      {/* Products End */}
    </>
    
        </>
      )
    }else{
      return(
        <>
          <h2>Error in loading product....</h2>
        </>
      )
    }


}

export default FeaturedProducts
