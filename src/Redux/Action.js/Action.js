import { ADD_TO_CART, DECREACE_QUANTITY_OF_PRODUCT, FETCH_CATEGORY_FAILIOR, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_PRODUCT_FAILIOR, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, INCREACE_QUANTITY_OF_PRODUCT, REMOVE_FROM_CART, SET_CURRENT_CATEGORY } from "../ConstantType/ConstantType"
import axios from "axios"

// CATEFORY ACTIONS  

const Fetch_category_request = ()=>{
    return{type:FETCH_CATEGORY_REQUEST}
}
const Fetch_category_success = (data)=>{
    return{type:FETCH_CATEGORY_SUCCESS,payload:data}
}
const Fetch_category_failior = (error)=>{
    return{type:FETCH_CATEGORY_FAILIOR,payload:error}
}

export const fetch_category = ()=>{
    return (dispatch)=>{
        dispatch(Fetch_category_request())
        var p = axios.get('https://dummyjson.com/products/categories');
        p.then((response)=>{
            var data = response.data; 
            dispatch(Fetch_category_success(data))           
        },(error)=>{
            var err = error.massage
            dispatch(Fetch_category_failior(err)) 
        });
    }
}

export const set_category = (category)=>{
    return {type:SET_CURRENT_CATEGORY,payload:category}
}

// Product ACTIONS 

const Fetch_product_request = ()=>{
    return{type:FETCH_PRODUCT_REQUEST}
}
const Fetch_product_success = (data)=>{
    return{type:FETCH_PRODUCT_SUCCESS,payload:data}
}
const Fetch_product_failior = (error)=>{
    return{type:FETCH_PRODUCT_FAILIOR,payload:error}
}

export const fetch_product = ()=>{
    return (dispatch)=>{
        dispatch(Fetch_product_request())
        var p = axios.get('https://dummyjson.com/products');
        p.then((response)=>{
            var data = response.data.products; 
            console.log(data)
            dispatch(Fetch_product_success(data))           
        },(error)=>{
            var err = error.massage
            dispatch(Fetch_product_failior(err)) 
        });
    }
}

// CART ACTIONS 

export const add_cart = (p)=>{
    return {type:ADD_TO_CART,payload:p}
}
export const remove_cart = (p)=>{
    return {type:REMOVE_FROM_CART,payload:p}
}
export const increase_quantity = (p)=>{
    return {type:INCREACE_QUANTITY_OF_PRODUCT,payload:p}
}
export const decrease_quantity = (p)=>{
    return {type:DECREACE_QUANTITY_OF_PRODUCT,payload:p}
}