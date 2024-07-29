import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';

const Product = ({ product }) => {

  const router = useRouter();


  return (
    <div className='product-card-container'>
    <Card className='product-card'>
      <CardMedia image={product.image.url} title={product.name} className= "product-media" />
      <CardContent className='product-details-container'>
        <div className='product-title-container'>
        <span className='product-title'>
                  {product.name}
              </span>
        </div>
        <div className='product-desc' dangerouslySetInnerHTML={{__html: product.description}}>
        </div>
      </CardContent>
      <CardActions className="product-button">
      <div className='product-seemore' onClick={() => {
        return router.push(`/product/${product.id}`)
      }}><span >Vezi Detalii</span></div>
      </CardActions>
    </Card>
    </div>
  );
}

export default Product;
