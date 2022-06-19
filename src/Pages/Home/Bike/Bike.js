import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Bike = (props) => {
    const {_id, name, supplier, des, img, price, quantity
    } = props.product;
    const navigate = useNavigate();
    const update = id => {
        navigate(`/bike/${id}`);
    }

    return (

        <div className="card col-sm-12 col-md-6 col-lg-4" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body gx-5">
                <h3 className="card-title">{name}</h3>
                <h4>Price: ${price}</h4>
                <h5>Supplier: {supplier}</h5>
                <h6>Quantity: {quantity}</h6>
                <p className="card-text">{des}</p>
                <Button onClick={() => update(_id)} className="btn btn-primary">Update</Button>
            </div>
        </div>

    );
};

export default Bike;