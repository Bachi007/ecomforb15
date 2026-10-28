import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function UDashboard(){

    var [username,setUsername]=useState("");
    var navigate=useNavigate("")
    useEffect(()=>{
        if(!localStorage.getItem("userloggedin")){
            navigate("/")
        }
        else{
            setUsername(localStorage.getItem("userloggedin"))
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
                                    <h5 className="text-white">Welcome {username}!..</h5>
                            </li>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                     to="/home">Home</Link>
                                </li>
                                 <li className="nav-item">
                                    <Link className="nav-link"
                                     to="/add">View Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                     to="/add">View Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                     to="/add">Cart</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"
                                     to="/add">Wishlist</Link>
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