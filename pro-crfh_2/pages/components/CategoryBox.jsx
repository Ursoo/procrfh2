import React, { useEffect, useState } from 'react';
import { client } from '../../lib/commerce';
import  Link  from 'next/link';

import { Button } from '@mui/material';

import Product from './Product';


const CategoryBox = ({ category }) => {

  const [ products, setProducts ] = useState([]);

  const fetchProducts = async (category) => {
    const {data: response} = await client.products.list({
      category_slug: category.slug,
      limit: 4,
    })

    setProducts(response);
  };

  useEffect(()=>{
    fetchProducts(category);
  }, []);

  return (
            <div className='track' >
              {products.map((item) => (
                  <Product product={item} />   
              ))}
            <div style={{
                  display:'flex',
                  alignItems:'flex-end',
                  }}>
                  <Link href={`/category/${category.slug}?page=1`}>
                  <Button variant='contained'><span><strong>Vezi toate produsele</strong></span></Button>
                  </Link>
                  </div>
            </div>
  );
}

export default CategoryBox;
