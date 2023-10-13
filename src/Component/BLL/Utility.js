
export function getAfterDiscount(price,discountPercentage){
    var p = price - price * (discountPercentage/100)
    return p.toFixed(2)
}

export function addToCart(product,cart){
    var x = cart.find((e)=>e.product.id==product.id);
    if(x){
        x.quantity +=1;
    }else{
        cart.push({product:product,quantity:1});
    }
}
export function removeFromCart(product,cart){
    var index = cart.findIndex((e)=>e.product.id==product.id);
    if(index != -1){
        cart.splice(index,1)
    }
}

export function increaseProductQuantity(product,cart){
    var x = cart.find((e)=>e.product.id==product.id);
    if(x){
        x.quantity +=1;
    }
}
export function decreaseProductQuantity(product,cart){
    var x = cart.find((e)=>e.product.id==product.id);
    if(x){
        if(x.quantity==1){
            removeFromCart(product,cart)
        }else{
            x.quantity -=1;
        }
    }
}

export function getTotalCartValue(cart){
    var val = 0.0;
    for(let e of cart){
        val += e.quantity * getAfterDiscount(e.product.price,e.product.discountPercentage)
    }
    return val.toFixed(2)
}