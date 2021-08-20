import React, { useState } from 'react';
import { useEffect } from 'react';
import Products from '../Products/Products';

const Home = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
        fetch('https://fresh-valley-server-new.herokuapp.com/productsData')
        .then(res => res.json())
        .then(data => setProductsData(data))
  }, [])
  
  return (
    <div>
    
    <div className="row">
        {
          productsData.map(product =><Products product={product}></Products>)
        }
    </div>
    </div>
  );
};

export default Home;