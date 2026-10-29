import { createSlice } from "@reduxjs/toolkit";


var CartSlice=createSlice({
    name:'cart',
    initialState:{
        cartitems:[]
    },
    reducers:{
        addtocart:(state,action)=>{
            console.log(action.payload)
            var ind=state.cartitems.findIndex((obj)=>
                obj.productId==action.payload.productId && 
                               obj.username==action.payload.username)
            if(ind==-1){
                state.cartitems.push(action.payload);
            }
            else{
               state.cartitems[ind].quantity=state.cartitems[ind].quantity+1;
            }
        },
        removefromcart:(state,action)=>{
            var ind=state.cartitems.findIndex((obj)=>
            obj.productId==action.payload.productId && obj.username==action.payload.username);
            state.cartitems.splice(ind,1);
        },
        getCartByUsername:(state,action)=>{
            state.cartitems=state.cartitems.filter((obj)=>obj.username==action.payload);
        }
    }
})

export const {addtocart,removefromcart,getCartByUsername}=CartSlice.actions;
export default CartSlice.reducer;