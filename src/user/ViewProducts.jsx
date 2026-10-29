import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ViewProducts(){

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
               <button style={btnStyle} onClick={()=>navigate("/user/detail/"+pro.productId)}>
                 <div className="card">
                  <div className="card-header">
                    <img src={pro.productImage} height={200} alt="" className="card-img-top" />
                    <h1>{pro.productName}</h1>
                  </div>
                  <div className="card-body">
                    <p>{pro.productDescription}</p>
                    <p>Price : <span className="badge bg-danger">{pro.productPrice}</span></p>
                  </div>
                </div>
               </button>
              </div>
            ))
          }
        </div>





        </>
    )


}
export default ViewProducts;