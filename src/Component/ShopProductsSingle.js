import React from 'react'
import { getAfterDiscount } from './BLL/Utility'
import { add_cart } from '../Redux/Action.js/Action'
import { useDispatch } from 'react-redux'

function ShopProductsSingle(props) {
  var dispatch = useDispatch();

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
  <div className="product-item bg-light mb-4">
    <div className="product-img position-relative overflow-hidden">
      <img className="img-fluid w-100" src={props.products.thumbnail} alt="" />
      <div className="product-action">
        <a className="btn btn-outline-dark btn-square" href="">
          <i className="fa fa-shopping-cart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
          <i className="far fa-heart" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
          <i className="fa fa-sync-alt" />
        </a>
        <a className="btn btn-outline-dark btn-square" href="">
          <i className="fa fa-search" />
        </a>
      </div>
    </div>
    <div className="text-center py-4">
      <a className="h6 text-decoration-none text-truncate" href="">
        {props.products.title}
      </a>
      <p>{props.products.description}</p>

      <div className="d-flex align-items-center justify-content-center mt-2">
        <h5>${getAfterDiscount(props.products.price,props.products.discountPercentage)}</h5>
        <h6 className="text-muted ml-2">
          <del>${props.products.price}</del>
          -({props.products.discountPercentage}%)
        </h6>
      </div>
      <div>
        <button onClick={()=>{dispatch(add_cart(props.products))}} className='btn btn-success mb-2'>Add to cart</button>
      </div>
      <div className="d-flex align-items-center justify-content-center mb-1">
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small className="fa fa-star text-primary mr-1" />
        <small>(99)</small>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default ShopProductsSingle


