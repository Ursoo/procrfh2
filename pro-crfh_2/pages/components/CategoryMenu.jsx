import { Typography, Paper, Divider } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { client } from '../../lib/commerce';
import Searchbar from './Searchbar';


const CategoryMenu = () => {

  const router = useRouter();
  const [ categories, setCategories ] = useState([]);

  const fetchCategories = async () => {
    const { data: response } = await client.categories.list();

    setCategories(response);
  };

  useEffect(()=>{
    fetchCategories();
  },[]);
  

  return ( router.pathname !== '/' &&
    <div className='categorymenu'>
      <div className='categorymenu-background'>
        <Typography variant='h5' className='categorymenu-title'>Cautare</Typography>
        <Divider />
        <div className='searchbar-container'>
        <Searchbar />
        </div>
        <ul key='category-list' className='categorymenu-list' title='Categorii'>
        <Typography variant='h5' className='categorymenu-title'>Categorii:</Typography>
        {categories.map((category) => {
          return(
          <Link key={category.id} href={`/category/${category.slug}?page=1`}>
          <li className='categorymenu-list-items' key={category.id}>
          <Typography variant='overline'>{category.name}</Typography>
          </li>
          </Link>);
        })
          }
          </ul>
      </div>
    </div>
  );
}

export default CategoryMenu;
