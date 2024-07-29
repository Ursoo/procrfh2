import { Grid, Typography, Divider, Pagination } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { client } from '../../lib/commerce';
import { Product } from '../components';

export async function getServerSideProps({ params, query }) {
  const category  = await client.categories.retrieve(params.slug, { type: 'slug' });
  const {data: products, meta: metadata} = await client.products.list({
    category_slug: params.slug,
    page: query.page,
  });

  return {
    props: {
      category,
      metadata,
      products
    },
  }
}

const CategoryPage = ({category, products, metadata}) => {
  
  const [ currPage, setCurrPage ] = useState(1);
  const router = useRouter();
  
  const handleChange = (e, p) => {
    setCurrPage(p);
    router.push(`/category/${category.slug}?page=${p}`);
  }

  return (
    <div className='shop-body'>
      <Head>
        <title>{category.name} - PRO C.R.F.H.</title>
      </Head>
      <Grid className='categorypage-grid' container spacing={4}>
        <Grid key='title' className='categorypage-title-container' item xs={12}>
          <h1>
            <Typography variant='h3' className='categorypage-title'>{category.name}</Typography>
          </h1>
        </Grid>
        <Grid item xs={12}><Divider /></Grid>
        {products.map((product)=>{
          return(
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
          </Grid>);
        })}
        <Grid className='categorypage-pagination-container' item xs={12}>
          <Pagination className='categorypage-pagination' page={currPage} onChange={handleChange} count={metadata.pagination.total_pages} shape="rounded" size='large'/>
        </Grid>
      </Grid>
    </div>
  );
}

export default CategoryPage;
