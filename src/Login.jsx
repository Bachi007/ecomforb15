import { useRef } from "react"
import { useNavigate } from "react-router-dom";

export default function Login(){


    var username=useRef("");
    var password=useRef("");
    var navigate =useNavigate();

    var handleCheck=(e)=>{
        e.preventDefault();
        console.log(username.current.value);
        console.log(password.current.value)
        var reqpwd=username.current.value.slice(0,3)+"123"
       console.log(reqpwd)
        if(username.current.value=="admin" && password.current.value=="admin123"){
            localStorage.setItem("adminloggedin",username.current.value)
            navigate("/admin/home")

        }
       else if(username.current.value!=null && password.current.value==reqpwd){
        localStorage.setItem("userloggedin",username.current.value)  
        navigate("/user/home")
        }
        else{
            alert("username or password is incorrect");
        }
        
    }

    return(
        <>
        <div className="row">
            <div className="col-md-7">
                <img src="https://img.magnific.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?semt=ais_hybrid&w=740&q=80"  height={500} width={500} alt="" />
            </div>
            <div className="col-md-4 mt-5 pt-5">
                <h1>Login to Order</h1>
                <form onSubmit={handleCheck}>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">username</label>
                        <input type="text" className="form-control"  ref={username} name="" id="" />
                    </div>
                       <div className="form-group">
                        <label htmlFor="" className="form-label">password</label>
                        <input type="password" className="form-control"  ref={password} name="" id="" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login </button>
                        <button type="reset" className="btn btn-danger">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )

}