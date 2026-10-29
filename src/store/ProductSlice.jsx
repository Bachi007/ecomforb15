import {createSlice} from  "@reduxjs/toolkit";


var ProductSlice=createSlice({
    name:'products',
    initialState:{
        productlist:[
            {
        productId:"1",
        productName:"BMW s 1000RR",
        productDescription:"Super sport not in a budget for sure",
        productPrice:"4500000",
        productImage:"https://imgd.aeplcdn.com/1056x594/n/4i850fb_1809701.jpg?q=80"
      },
      {
        productId:"5",
        productName:"BMW 1250GSA",
        productDescription:"Super sport not in a budget for sure",
        productPrice:"2500000",
        productImage:"https://imgd.aeplcdn.com/1056x594/n/4i850fb_1809701.jpg?q=80"
      },
       {
        productId:"2",
        productName:"Honda african twin",
        productDescription:"Adv made for offroads",
        productPrice:"1800000",
        productImage:"https://powersports.honda.com/motorcycle/adventure/-/media/products/family/africa-twin/trims/trim-main/africa-twin-adventure-sports-es-dct/2026/2026-africa-twin-adventure-sports-es-dct-pearl_white-1505x923.png"
      },{
       productId:"6",
        productName:"Ducati Multistarda",
        productDescription:"Adv made for offroads",
        productPrice:"3800000",
        productImage:"https://powersports.honda.com/motorcycle/adventure/-/media/products/family/africa-twin/trims/trim-main/africa-twin-adventure-sports-es-dct/2026/2026-africa-twin-adventure-sports-es-dct-pearl_white-1505x923.png"
      },
      {
        productId:"3",
        productName:"Triumph tiger 1200",
        productDescription:"Adv made for offroads",
        productPrice:"2800000",
        productImage:"https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/triumph-select-model-sapphire-black-pro-1652099114030.jpg?q=80"
      },
       {
        productId:"7",
        productName:"Triumph street triple",
        productDescription:"Adv made for offroads",
        productPrice:"2800000",
        productImage:"https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/triumph-select-model-sapphire-black-pro-1652099114030.jpg?q=80"
      },
      {
        productId:"4",
        productName:"Kawasaki h2r",
        productDescription:"Super sport ",
        productPrice:"3200000",
        productImage:"https://www.lego.com/cdn/cs/set/assets/blta83a881921fd4b76/42170.png?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1"
      }
    ],
    selectedProduct:null,
    updatedProduct:null
    },
    reducers:{
        addtolist:(state,action)=>{
                state.productlist.push(action.payload);

        },
        deletefromlist:()=>{

        },
        selecttoupdate:(state,action)=>{
          state.updatedProduct=state.productlist.find((obj)=>obj.productId==action.payload)
        },
        updateNow:(state,action)=>{
          var ind=state.productlist.findIndex(obj=>obj.productId==action.payload.productId);
          if(ind!=-1){
            state.productlist.splice(ind,1,action.payload);
          }
        },
        getOne:(state,action)=>{
            state.selectedProduct=state.productlist
                                    .find((obj)=>
                                        obj.productId==action.payload)
        }
    }   
    
})

export const {addtolist,deletefromlist,getOne,selecttoupdate,updateNow} = ProductSlice.actions;
export default ProductSlice.reducer;