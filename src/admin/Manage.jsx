import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Manage(){

    var navigate=useNavigate();
      var plist=useSelector((state)=>state.product.productlist);
      console.log(plist)
    var btnStyle={
      border:"none",
      outline:"none",
      backgroundColor:"transparent"
    }
    return(
        <>
        <h1>View Products</h1>
        <div className="row">
          {
            plist.map((pro,ind)=>(
              <div className="col-md-4" key={ind}>
                 <div className="card">
                  <div className="card-header">
                    <img src={pro.productImage} height={200} alt="" className="card-img-top" />
                    <h1>{pro.productName}</h1>
                  </div>
                  <div className="card-body">
                    <p>{pro.productDescription}</p>
                    <p>Price : <span className="badge bg-danger">{pro.productPrice}</span></p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-warning" 
                    onClick={()=>navigate("/user/update/"+pro.productId)}>Update</button>
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>





        </>
    )


}
export default Manage;