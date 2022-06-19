import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import "./Products.css"


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://rocky-ocean-83811.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div id='bikes' className='container products'>
            <h1 className='text-center m-5'>Bike Collection</h1>
            <div className='row'>
                {
                    products.map(product => <Bike
                        key={product._id}
                        product={product}></Bike>)
                }
            </div>
        </div>
    );
};

export default Products;