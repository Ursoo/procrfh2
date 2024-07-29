import React from 'react';
import Head from 'next/head';
import { Grid } from '@mui/material';
import  Image  from 'next/image';

const Automatizare = () => {
  
  const pageContent = 'Tablourile electrice reprezinta cea mai importanta parte a oricarei instalatii electrice care asigura alimentarea cu energie si functionarea in deplina siguranta a tuturor consumatorilor. Va punem la dispozitie producerea tablourilor electrice de comanda si automatizare personalizabila dupa cererile si nevoile dumneavoastra.';
  return (
    <>
        <Head>
            <title>Automatizari - PRO C.R.F.H.</title>
        </Head>
        <div className='page-body'>
            <h1 className='page-title'>Automatizari</h1>
            <br />
            <Grid container spacing={4} rowSpacing={0}>
              <Grid className='page-body' container xs={6}>
                <Grid item xs={12}><span className='page-text'>{pageContent}</span></Grid>
                <br />
                <Grid item xs={6}>
                  <Image width='400px' height='400px' src="https://i.ibb.co/4Y61w6J/304884875-595205128968779-4084126459623867406-n-1.png" />
                </Grid>
                <Grid item xs={6}>
                  <Image width='400px' height='400px' src="https://i.ibb.co/QvD49x6/304558036-485669369699744-6121477937420409614-n-1.png" />
                </Grid>
              </Grid>
              <Grid className='homepage-img-container' item lg={4}>
              <Image width='900px' height='980px' src="https://i.ibb.co/jztZvnv/287296218-485481483068357-680107998308048054-n-2.png" />
              </Grid>
            </Grid>
        </div>   
    </>
  );
}

export default Automatizare;
