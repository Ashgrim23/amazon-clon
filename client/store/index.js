

export const state=()=>({
    cart:[],
    cartLength:0,
    shippingPrice:0,
    shippingEstimatedDelivery:""
})

export const actions={
    addProductToCart({state,commit},data) {        
        const cartProduct=state.cart.find(prod=>prod._id===data.product._id)       
        if (!cartProduct){
            commit("pushProductToCart",data)            
        } else {
            
            commit("incrementProductQty",{cartProduct:cartProduct,qty:data.qty})
        }
        commit("incrementCartLength")
    }
}

export const mutations ={
    pushProductToCart(state,data){
        data.product.quantity=data.qty
        state.cart.push(data.product)
    },
    incrementProductQty(state,data){
        data.cartProduct.quantity+=data.qty;
        let indexOfProduct=state.cart.indexOf(data.cartProduct)        
        state.cart.splice(indexOfProduct,1,data.cartProduct)
    },
    incrementCartLength(state){
        state.cartLength=0;
        if (state.cart.length>0){
            state.cart.map(product=>{
                state.cartLength+=product.quantity
            })
        }
    },
    changeQty(state,{product,qty}){
        let cartProduct=state.cart.find(prod=> prod._id===product._id)
        cartProduct.quantity=qty;    
            
        let indexOfProduct=state.cart.indexOf(cartProduct)
        state.cart.splice(indexOfProduct,1,cartProduct)
        
        
        state.cartLength=0;
        if (state.cart.length>0){
            state.cart.map(product=>{
                state.cartLength+=product.quantity
            })
        }
        
    },
    removeProduct(state,product){
        state.cartLength-=product.quantity
        let indexOfProduct=state.cart.indexOf(product)
        state.cart.splice(indexOfProduct,1)
    },
    setShipping(state,{price,estimatedDelivery}){
        state.shippingPrice=price
        state.shippingEstimatedDelivery=estimatedDelivery
    },
    clearCart(state){       
        state.cart=[]
        state.cartLength=0
        state.shippingPrice=0
        state.shippingEstimatedDelivery=""        
    },
    setCart(state,cart){        
        state.cart=cart
        state.cartLength=0;
        if (state.cart.length>0){
            state.cart.map(product=>{
                state.cartLength+=product.quantity
            })
        }
    }

}

export const getters={    
    getCartLength(state){
        if (state.auth.loggedIn)
            return state.cartLength;
        else 
            return 0
    },
    getCart(state){
        if (state.auth.loggedIn)
            return state.cart
        
    },
    getCartTotalPrice(state){
        let total=0
        
        state.cart.forEach(product=>{
            total+=product.price*product.quantity
        })
        return total
    },
    getShippingPrice(state){
        return state.shippingPrice
    },
    getCartTotalPriceWithShipping(state){
        let total=0.00
        
        state.cart.forEach(product=>{
            total+=product.price*product.quantity
        })
        
        return (total+state.shippingPrice).toFixed(2)
    },
    getEstimatedDelivery(state){
        return state.shippingEstimatedDelivery
    },
    isAuthenticated(state) {
        return state.auth.loggedIn
      },
    
      loggedInUser(state) {
        return state.auth.user
      }
    
}

