import React, { useState } from 'react'
import './addtocart.css'
import pic from '../../Assets/images/mango.jpg'
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { BiSolidTrash } from "react-icons/bi";


const AddtoCart = () => {
    const [counter, setCounter] = useState(1); // Initialize counter to 1
    const [total, setTotal] = useState(36.00); // Initialize total to the price of one item

    const Decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            setTotal(total - 36.00);
        }
    }

    const Increment = () => {
        setCounter(counter + 1);
        setTotal(total + 36.00);
    }

    return (
        <>
            <div className="addCart">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3>There are {counter} items in your cart</h3>
                            <div className="detail mt-4">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <img src={pic} alt="" />
                                    </div>
                                    <div className="col-lg-6">
                                        <h3>Minneola Tangelos</h3>
                                        <span>Ships in 3 days</span>
                                        <h2>$36.00</h2>
                                        <div className='quantity'>Mangos . Order Qty: 10 Lbs</div>
                                    </div>
                                    <div className="col-lg-3">
                                        <table className="table table-bordered text-center">
                                            <tbody>
                                                <tr>
                                                    <td className='btns' onClick={Decrement}><TiMinus className='qicon' /></td>
                                                    <td>{counter}</td>
                                                    <td className='btns' onClick={Increment}><FaPlus className='qicon' /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div> <h4 className='mt-3'>Total: ${total.toFixed(2)}</h4> </div>
                                        <button className='btn'><BiSolidTrash className='mb-1 me-1' />Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h4>Shipping and Handling Service</h4>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>USPS Priority Mail - Large Flat Rate Box - $19.90</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0">
                            <div className="shipping">
                                <h3>Shipping Address</h3>
                                <p>No saved addresses</p>
                                <button className='btn'>Add Address</button>
                            </div>
                            <div className="summary mt-4">
                                <h3>Cart Summary</h3>
                                <div className="row">
                                    <div className="col-8">Number of Items</div>
                                    <div className="col-4 right">{counter}</div>
                                </div>
                                <div className="row">
                                    <div className="col-8">Sub Total</div>
                                    <div className="col-4 right">${total.toFixed(2)}</div>
                                </div>
                                <div className="row">
                                    <div className="col-8">Shipping & handling fee</div>
                                    <div className="col-4 right">$19.90</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-8">Total Payable</div>
                                    <div className="col-4 right">${(total + 19.90).toFixed(2)}</div>
                                </div>
                            </div>
                            <button className='btn' style={{ width: '100%' }}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddtoCart;
