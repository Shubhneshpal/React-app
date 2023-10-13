import React from 'react'
import { getAfterDiscount } from './BLL/Utility'
import { useDispatch } from 'react-redux'
import {decrease_quantity, increase_quantity } from '../Redux/Action.js/Action';

function CartElement(props) {
    var dispatch = useDispatch();
  return (
    <>
      <tr>
              <td className="align-middle">
                <img src={props.cartData.product.thumbnail} alt="" style={{ width: 50, height:'30px',objectFit:'cover',marginRight:'12px' }} />{" "}
                {props.cartData.product.title}
              </td>
              <td className="align-middle">${getAfterDiscount(props.cartData.product.price,props.cartData.product.discountPercentage)}</td>
              <td className="align-middle">
                <div
                  className="input-group quantity mx-auto"
                  style={{ width: 100 }}
                >
                  <div className="input-group-btn">
                    <button onClick={()=>{dispatch(decrease_quantity(props.cartData.product))}} className="btn btn-sm btn-primary btn-minus">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-secondary border-0 text-center"
                    value={props.cartData.quantity}
                  />
                  <div className="input-group-btn">
                    <button onClick={()=>{dispatch(increase_quantity(props.cartData.product))}} className="btn btn-sm btn-primary btn-plus">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td className="align-middle">${(getAfterDiscount(props.cartData.product.price,props.cartData.product.discountPercentage)*props.cartData.quantity).toFixed(2)}</td>
              <td className="align-middle">
                <button className="btn btn-sm btn-danger">
                  <i className="fa fa-times" />
                </button>
              </td>
            </tr>
    </>
  )
}

export default CartElement
