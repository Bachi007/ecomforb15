import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function ADashboard(){

    var navigate=useNavigate("")
    useEffect(()=>{
        if(!localStorage.getItem("adminloggedin")){
            navigate("/")
        }
    },[])
  var logoutfun=()=>{
        localStorage.clear();
        navigate("/")
    }

    return(
        <>
            <div className="row">
                <div className="col-md-2">
                    <nav className="navbar navbar-dark bg-dark mynav">
                        <div className="container fluid">
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                    <h5 className="text-white">Welcome Admin!..</h5>
                            </li>
                               
                                <li className="nav-item">
                                    <Link className="nav-link"
                                     to="/home">Home</Link>
                                </li>
                                 <li className="nav-item">
                                    <Link className="nav-link"
                                     to="/add">Add Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                     to="/add">Manage Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                     to="/add">View Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                     to="/add">View Users</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                     onClick={logoutfun}>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="col-md-10">
                    <Outlet></Outlet>
                </div>
            </div>


       </>
    )

}