import { useDispatch, useSelector } from "react-redux"
import { getCartByUsername } from "../store/CartSlice";
import { useEffect } from "react";

export default function Cart() {
    var cartitems = useSelector(state => state.cart.cartitems);
    var dispatch = useDispatch();
    useEffect(() => {

        var username = localStorage.getItem("userloggedin")
        dispatch(getCartByUsername(username));

    }, [dispatch])


    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartitems && cartitems.map((c, ind) => (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{c.productName}</td>
                                <td>{c.productPrice}</td>
                                <td>{c.quantity}</td>
                                <td><img src={c.productImage} height={100} width={100} alt="" /></td>
                                <td>
                                    <button className="btn btn-primary">Buy Now</button>
                                    <button className="btn btn-danger">Remove</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>



        </>
    )
}