
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Singleproduct.css'

const Singleproduct = () => {

    const [products, setProducts] = useState([]);
    const [singleproduct, setSingleProduct] = useState([]);
    const { id } = useParams();


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
                    <img src={singleproduct.image} />
                    <img src={singleproduct.image} />
                </div>
                <div className='Spro-right'>
                    <h4>{singleproduct.title}</h4>
                    <h5>{singleproduct.price} $</h5>
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
                        <button>ADD TO BAG</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singleproduct;
