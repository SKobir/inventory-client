import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.gitinit';



const AddBike = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data);
        const url = 'https://rocky-ocean-83811.herokuapp.com/bikes';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }



    return (
        <div className='w-50 mx-auto'>
            <h2>Add Bike</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name of Bike' {...register("name")} />
                <input className='mb-3' placeholder='Name of Supplier' {...register("supplier")} />
                <textarea className='mb-3' placeholder='Bike Description' {...register("des")} />
                <input className='mb-3' placeholder='Photo URL' {...register("img")} />
                <input className='mb-3' placeholder='Quantity of Bike' type="number" {...register("quantity")} />
                <input className='mb-3' placeholder='Price of Bike' type="number" {...register("price")} />
                <input className='mb-3' value={user.email} placeholder='Email' {...register("email")} />
                <input type="submit" value="Add Bike" />
            </form>
        </div>
    );
};

export default AddBike;