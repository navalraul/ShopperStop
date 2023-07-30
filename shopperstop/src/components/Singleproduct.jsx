
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Singleproduct.css'

const Singleproduct = () => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [currentUserEmail, setCurrentUserEmail] = useState("");
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState([]);
    const { id } = useParams();
    const router = useNavigate();


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    useEffect(() => {
        if (id && products.length) {
            const result = products.find((products) => products.id == id);

            setSingleProduct(result)
        }
    }, [id, products])

    useEffect (() => {
        var user = JSON.parse(localStorage.getItem("Current-user"));
        // console.log(user, "usr")
        if (user) {
            setIsUserLoggedIn(true);
            setCurrentUserEmail(user.email)
        }
    }, [])

    
    function addCart() {
        if (isUserLoggedIn) {
            const users = JSON.parse(localStorage.getItem("Users"))

            // console.log(users)
            for ( var i = 0; i < users.length; i++) {
                if(users[i].email == currentUserEmail) {
                    users[i].cart.push(singleProduct)
                    console.log(singleProduct)
                    localStorage.setItem("Users", JSON.stringify(users))
                }
            }
            alert("Product added")
            router('/multi-product')
        } else {
            alert("You cant add product")
        }
    }

    return (
        <div id='Smain'>
            <div className='Hnav'>
                <div className='Hnav-fi'>
                    <h5>CATEGORIES</h5>
                    <h4>LUXE</h4>
                    <h5>BARGAINS</h5>
                    <h5>STYLE HUB</h5>
                </div>
                <div className='Hnav-se'>
                    <p>MEN</p>
                    <p>WOMEN</p>
                    <p>BEAUTY</p>
                    <p>WATCHES</p>
                    <p>KIDS</p>
                    <p>HOMESTOP</p>
                    <p>GIFTS</p>
                    <p>BRANDS</p>
                </div>
            </div>
            <div className='Ssec'>
                <p>Home / Men / Clothing / Shorts </p>
            </div>
            <div className='Sproduct'>
                <div className='Spro-left'>
                    <img src={singleProduct.image} />
                    <img src={singleProduct.image} />
                </div>
                <div className='Spro-right'>
                    <h4>{singleProduct.title}</h4>
                    <h5>{singleProduct.price} $</h5>
                    <p> <span> 419 </span> People Have Viewed This Product Recently!</p>
                    <div className='Size'>
                        <div className='Size-text'>
                            <h4>Size</h4>
                            <p>Size Chart</p>
                        </div>
                        <div className='Size-but'>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>XXL</button>
                        </div>
                    </div>
                    <div className='Bag'>
                        <button onClick={addCart}>ADD TO BAG</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singleproduct;
