import { FETCH_CATEGORY_FAILIOR, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_PRODUCT_FAILIOR, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, SET_CURRENT_CATEGORY } from "../ConstantType/ConstantType"
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

// CATEFORY ACTIONS

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
            dispatch(Fetch_product_success(data))           
        },(error)=>{
            var err = error.massage
            dispatch(Fetch_product_failior(err)) 
        });
    }
}