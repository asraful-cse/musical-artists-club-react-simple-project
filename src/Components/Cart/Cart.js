import React from 'react';
import './Cart.css';
const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props || {};
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.salary;
    const total = cart.reduce(totalReducer, 0)
    return (
        <div className="card-container " >
            <div >
                <h5 style={{ color: 'white' }}><i className="fas fa-grin-hearts icon-color"></i> ARTISTS ADDED </h5>
                <h5 style={{ color: 'yellow' }}>{props.cart.length}</h5>
                <br />
                <h5 style={{ color: 'white' }}>TOTAL COST :</h5>
                <h6 style={{ color: 'yellow' }}> $ {total} M</h6>
                <br />
            </div>
            <ul>
                {
                    cart.map(added => <div className="added-artists d-flex">
                        <div className="img-size">
                            <img src={added.img} className="card-img-top figure-img img-fluid rounded" alt="artist" />
                        </div>
                        <div>
                            <h6>{added.name}</h6>
                        </div>
                    </div>)
                }
            </ul>
        </div>
    );
};

export default Cart;