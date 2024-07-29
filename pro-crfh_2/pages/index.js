import React from 'react';

import "@fontsource/roboto";
import { client } from '../lib/commerce';
import HomePage from './components/HomePage';


const Home = ({ products }) => {
  
  return (
    <main>
      <div>
     <HomePage products={products}/>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const { data: products } = await client.products.list({
    limit: 12,
  });

  return {
    props: {
      products,
    },
  }
}

export default Home;
