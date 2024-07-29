import { Grid, Pagination, Typography } from '@mui/material';
import Router, { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import Product from './Product';


const Searchpage = ({ results, resultMessage, pages, searchKey }) => {

  const [ currPage, setCurrPage ] = useState(1);
  const router = useRouter();
  
  const handleChange = (e, p) => {
    setCurrPage(p);
    router.push(`/search?keyword=${searchKey}&page=${p}`);
  }
  return ( !resultMessage.length ?
    (<Grid container spacing={4} className='categorypage-grid'>
      {results.map(( item ) => {
        return(
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={item} />
          </Grid>);
      } 
      )}
      <Grid style={{
        display: 'flex',
        justifyContent: 'center',
      }} item xs={12}>
        <Pagination page={currPage} count={pages} shape="rounded" size='large' onChange={handleChange}/></Grid>
      </Grid>) : (
        <div className='searchpage-fail'>
        <Typography variant= 'h4'>{resultMessage}</Typography>
        <Typography variant= 'subtitle'>Asigurati-va ca ati introdus numele corect. Pentru intrebari legate de stocul nostru nu ezitati sa ne contactati!</Typography>
        </div>)
  );
}

export default Searchpage;
