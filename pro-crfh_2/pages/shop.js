import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { client } from '../lib/commerce';
import CategoryBox from './components/CategoryBox';
import Link from 'next/link';

export async function getStaticProps() {

  const {data: categories} = await client.categories.list();

  return {
    props: {
      categories,
    },
  }

};

const shop = ({categories}) => {
  return (
    <div className='shop-body'>
    <Grid container rowSpacing={4} >
      {categories.map((category) => {
        return (
        <Grid key={category.slug} item xs={12}>
          {category.products ? (
            <div>
              <Link href={`/category/${category.slug}`}>
              <div className='category-title-container'><Typography variant='h3' className='category-title'>{category.name}</Typography>
              </div></Link>
              <Divider />
              <div style={{
                height: '3vh',
              }}/>
              <CategoryBox category={category} />
            </div>
            ) : null}
        </Grid>)
      })}
    </Grid></div>
  );
}

export default shop;
