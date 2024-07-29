import { Typography, Grid, Divider } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { client } from '../../lib/commerce';

const ProductPage = ({product}) => {

  return (
    <div className='productview-container'>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <Image src={product.image.url} width='1080px' height='720px'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant='h4'>{product.name}</Typography>
        <Divider />
        <div title='descriere' className='productview-desc-container' dangerouslySetInnerHTML={{__html: product.description}} ></div>
        </Grid>
        <Grid item xs={12} className='productview-disclaimer-container'>
        <Typography variant='subtitle1' className='productview-disclaimer'><b>*Pentru detalii despre stoc si pret, nu ezitati sa ne contactati!</b></Typography>
        </Grid>
        </Grid>
    </div>
  );
}

export async function getStaticPaths() {

  const {data: products} = await client.products.list();

  return {
    paths: products.map ((product) => ({
      params: {
        id: product.id,
      }
    })),
    fallback: true,
  }

}

export async function getStaticProps({ params: {id} }) {
  const product  = await client.products.retrieve(id);

  return {
    props: {
       product
    },

    revalidate: 60,
  }
}

export default ProductPage;
