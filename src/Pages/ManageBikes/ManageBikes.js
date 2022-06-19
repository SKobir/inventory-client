import React from 'react';
import useProducts from '../../hooks/hooks';

const ManageBikes = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://rocky-ocean-83811.herokuapp.com/bikes/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Bikes</h2>
            {
                products.map(product => <div key={product._id}>
                    <img src={product.img} className="card-img-top" alt="..." />
                    <div className="card-body gx-5">
                        <h3 className="card-title">{product.name}</h3>
                        <h4>Price: ${product.price}</h4>
                        <h5>Supplier: {product.supplier}</h5>
                        <h6>Quantity: {product.quantity}</h6>
                        <p className="card-text">{product.des}</p>
                        <button onClick={() => handleDelete(product._id)} className='bg-primary' >Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageBikes;