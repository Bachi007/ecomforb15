import { useState } from "react"
import { useDispatch } from "react-redux";
import { addtolist } from "../store/ProductSlice";

export default function AddProducts(){

    var [pid,setPid]=useState("");
    var [pname,setPname]=useState("");
    var [pdescription,setPdescription]=useState("");
    var [pprice,setPprice]=useState(0);
    var [pimage,setPimage]=useState("");

    var dispatch=useDispatch();

    var addNow=(e)=>{
        e.preventDefault();
        var newobj={
            productId:pid,
            productName:pname,
            productDescription:pdescription,
            productPrice:pprice,
            productImage:pimage
        }
        dispatch(addtolist(newobj));
        alert("product added")

    }

    return(
        <>
        <h1>Add Products</h1>
        <div className="row">
            <div className="col-md-4">
                <form action="" onSubmit={addNow}>
        <div className="form-group">
            <label htmlFor="" className="form-label">productId</label>
            <input type="text" className="form-control" onChange={(e)=>setPid(e.target.value)} />
        </div>
                <div className="form-group">
            <label htmlFor="" className="form-label">productName</label>
            <input type="text" className="form-control" onChange={(e)=>setPname(e.target.value)} />
        </div>
                <div className="form-group">
            <label htmlFor="" className="form-label">productDescription</label>
            <input type="text" className="form-control" onChange={(e)=>setPdescription(e.target.value)} />
        </div>
                <div className="form-group">
            <label htmlFor="" className="form-label">productPrice</label>
            <input type="text" className="form-control" onChange={(e)=>setPprice(e.target.value)} />
        </div>
                <div className="form-group">
            <label htmlFor="" className="form-label">productImage</label>
            <input type="text" className="form-control" onChange={(e)=>setPimage(e.target.value)} />
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary">Add Product</button>
            <button type="reset" className="btn btn-danger">Cancel</button>
        </div>
        </form>
            </div>
            <div className="col-md-8">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/people-add-product-to-cart-in-online-shopping-app-illustration-svg-download-png-10176421.png" className="img-fluid" alt="" />
            </div>
        </div>
        </>
    )

}