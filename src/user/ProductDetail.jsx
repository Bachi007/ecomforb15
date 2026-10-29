import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getOne } from "../store/ProductSlice";
import { addtocart } from "../store/CartSlice";


export default function ProductDetail(){

    const dispatch=useDispatch();
    const {pid}=useParams();
    var reqproduct=null;
     reqproduct=useSelector((state)=>state.product.selectedProduct);
    useEffect(()=>{
        dispatch(getOne(pid));   
    },[dispatch,pid])
    

    var handleCart=()=>{
        var obj={
            ...reqproduct,
            quantity:1,
            username:localStorage.getItem("userloggedin")
        }
        dispatch(addtocart(obj));
    }





    return(
        <>
        <h1>Details of {pid}</h1>
        {reqproduct && (
            <div className="row">
                <div className="col-md-4">
                    <img src={reqproduct.productImage} className="img-fluid" alt="" />
                </div>
                 <div className="col-md-8">
                    <h2>{reqproduct.productName}</h2>
                    <p>{reqproduct.productDescription}</p>
                    <p>price : {reqproduct.productPrice}</p>
                    <button className="btn btn-primary">Buy Now</button>
                    <button className="btn btn-warning" onClick={handleCart}>Add to cart</button>
                </div>
            </div>
        )
    };
        </>
    )

}