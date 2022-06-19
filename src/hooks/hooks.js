import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://rocky-ocean-83811.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return [products, setProducts];
}

export default useProducts;