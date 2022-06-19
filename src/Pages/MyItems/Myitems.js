import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.gitinit';

const Myitems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const email = user.email;
        const getItems = async () => {
            const url = `https://rocky-ocean-83811.herokuapp.com/item?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
        }
        getItems();

    }, [])
    return (
        <div>
            <h1 className='text-center border border-info'>{user?.displayName} Items</h1>

        </div>
    );
};

export default Myitems;