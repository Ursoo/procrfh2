import Head from 'next/head';
import React from 'react';
import { SearchPage } from './components';
import { client } from '../lib/commerce';
import { useStateContext } from '../context/StateContext';

export async function getServerSideProps({query}) {
  const {data, meta} = await client.products.list({
    query: query.keyword,
    page: query.page
  });
  let failMessage = !data ? "Niciun rezultat gasit." : "";
  console.log(query);

  if (!data) return {
    props:{
      failMessage: failMessage,
  }};

  return {
    props: {
      results: data,
      failMessage: failMessage,
      pages: meta.pagination.total_pages,
    }
  }
}

const search = ({results, failMessage, pages}) => {
  const { searchKey } = useStateContext();
  return (
    <div className='shop-body'>
      <Head>
        <title>Rezultatele cautarii</title>
      </Head>
      <SearchPage searchKey={searchKey} results={results} resultMessage={failMessage} pages={pages}/>
    </div>
  );
}

export default search;
