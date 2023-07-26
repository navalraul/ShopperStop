
import React, { useEffect, useState } from 'react';
import './Multiproduct.css'
import { useNavigate } from 'react-router-dom';

const Multiproduct = () => {

    const [products, setProducts] = useState([]);
    const router = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    const redirect = (id) => {

        router(`/single-product/${id}`)
    }

    return (
        <div id='Mmain'>
            <div className='Mhead'>
                <div className='Mhead-title'>
                    <h2>All Categories <span> 28312 Products </span></h2>
                </div>
                <div className='Mhead-sort'>
                    <p>Sort by :</p>
                    <select>
                        <option>Popularity</option>
                        <option>Price Low to High</option>
                        <option>Price High to Low</option>
                        <option>New Arrivals</option>
                        <option>Discounts</option>
                    </select>
                </div>
            </div>
            <div className='Mbot'>
                <div className='Filter'>
                    <div className='Fil-cat'>
                        <p>CATEGORIES</p>
                        <form>
                            <input type='checkbox' />
                            <label>ACCESSORIES  (1,004)</label><br />
                            <input type='checkbox' />
                            <label>ETHNICWEAR  (2,887)</label><br />
                            <input type='checkbox' />
                            <label>JACKETS  (237)</label><br />
                            <input type='checkbox' />
                            <label>JEANS  (2,070)</label><br />
                            <input type='checkbox' />
                            <label>INNERWEAR & NIGHTWEAR  (2,640)</label><br />
                            <input type='checkbox' />
                            <label>SHIRTS  (6,807)</label><br />
                            <input type='checkbox' />
                            <label>SHORTS  (500)</label><br />
                            <input type='checkbox' />
                            <label>SPORTS & ACTIVEWEAR  (2,633)</label><br />
                            <input type='checkbox' />
                            <label>SUITS & BLAZERS  (630)</label><br />
                            <input type='checkbox' />
                            <label>TROUSERS  (1,785)</label><br />
                        </form>
                    </div>
                    <div className='Fil-cat'>
                        <p>BRANDS</p>
                        <form>
                            <input type='checkbox' />
                            <label>FLAT 30% OFF  (112)</label><br />
                            <input type='checkbox' />
                            <label>FLAT 37% OFF  (12)</label><br />
                            <input type='checkbox' />
                            <label>FLAT 70% OFF  (926)</label><br />
                            <input type='checkbox' />
                            <label>FLAT 40% OFF  (1,049)</label><br />
                            <input type='checkbox' />
                            <label>FLAT 25% OFF  (345)</label><br />
                            <input type='checkbox' />
                            <label>FLAT 30% OFF   (1,302)</label><br />
                            <input type='checkbox' />
                            <label>FLAT 10% OFF  (138)</label><br />
                            <input type='checkbox' />
                            <label>FLAT 65% OFF  (327)</label><br />
                            <input type='checkbox' />
                            <label>FLAT 20% OFF  (230)</label><br />
                            <input type='checkbox' />
                            <label>FLAT 40% OFF  (1,911)</label><br />
                        </form>
                    </div>
                    <div className='Fil-cat'>
                        <p>SIZE</p>
                        <form>
                            <input type='checkbox' />
                            <label>1  (123)</label><br />
                            <input type='checkbox' />
                            <label>100  (77)</label><br />
                            <input type='checkbox' />
                            <label>102  (7)</label><br />
                            <input type='checkbox' />
                            <label>105  (12)</label><br />
                            <input type='checkbox' />
                            <label>11-12 Y  (1)</label><br />
                            <input type='checkbox' />
                            <label>110  (8)</label><br />
                            <input type='checkbox' />
                            <label>13-14 Y  (1)</label><br />
                            <input type='checkbox' />
                            <label>15-16 Y  (1)</label><br />
                            <input type='checkbox' />
                            <label>2  (124)</label><br />
                            <input type='checkbox' />
                            <label>2 XL  (11)</label><br />
                        </form>
                    </div>
                    <div className='Fil-cat'>
                        <p>PRICE</p>
                        <form>
                            <input type='checkbox' />
                            <label>51-100  (11)</label><br />
                            <input type='checkbox' />
                            <label>101-500  (3,998)</label><br />
                            <input type='checkbox' />
                            <label>501-1000  (7,561)</label><br />
                            <input type='checkbox' />
                            <label>1001-2000  (9,425)</label><br />
                            <input type='checkbox' />
                            <label>2001-3000  (5,171)</label><br />
                            <input type='checkbox' />
                            <label>3001-5000  (1,700)</label><br />
                            <input type='checkbox' />
                            <label>5001-10000  (368)</label><br />
                            <input type='checkbox' />
                            <label>5001-10000  (368)</label><br />
                            <input type='checkbox' />
                            <label>10001 AND ABOVE  (74)</label><br />
                            <input type='checkbox' />
                            <label>10001 AND ABOVE  (74)</label><br />
                        </form>
                    </div>
                    <button>Refine Search</button>
                </div>
                <div className='Products'>

                    {products.length ?
                        <div className='Products-all'>
                            {products.map((pro) => (
                                <div className='Products-all-1' onClick={() => redirect(pro.id)}>
                                    <img src={pro.image} />
                                    <h4>{pro.title}</h4>
                                    <h5>{pro.price} $</h5>
                                </div>
                            ))}
                        </div>
                        : <h1 style={{ width: "10%", margin: 'auto' }}>Loading...</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default Multiproduct
