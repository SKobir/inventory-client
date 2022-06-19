import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { bikeId } = useParams();
    const [bike, setBike] = useState({});

    useEffect(() => {
        const url = `https://rocky-ocean-83811.herokuapp.com/bikes/${bikeId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBike(data));

    })

    return (
        <div>
            <h2 className='text-center'>welcome to Update: {bike.name}</h2>
            <div className="mx-auto" style={{ width: '18rem' }}>
                <img src={bike.img} className="card-img-top" alt="..." />
                <div className="card-body gx-5">
                    <h3 className="card-title">{bike.name}</h3>
                    <h4>Price: ${bike.price}</h4>
                    <h5>Supplier: {bike.supplier}</h5>
                    <h6>Quantity: {bike.quantity}</h6>
                    <p className="card-text">{bike.des}</p>
                </div>
            </div>
        </div>
    );
};

export default Update;