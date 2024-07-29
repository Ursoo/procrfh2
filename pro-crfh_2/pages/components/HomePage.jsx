import React from 'react';
import { Divider, Grid, Paper, Button, Typography } from '@mui/material';
import Product from './Product';
import { useRouter } from 'next/router';
import Image from 'next/image';


const HomePage = ({ products }) => {

  const router = useRouter();

    const services = [{
        'title': 'Consultanta',
        'content': 'Suntem pregatiti pentru a va oferii consultanta in scopul de a facilita procesul de selectare a produselor potrivite proiectelor dumneavoastra, indiferent de complexitatea specifiicatilor acestora.',
      },{
        'title': 'Montaj',
        'content': 'Va punem la dispozitie o echipa pentru montarea instalatiilor frig: Vitrine frigorifice, Camere de refrigerare si congelare, Echipamente de climatizare etc.',
      },{
        'title': 'Mentenanta si Service',
        'content': 'Echipa de mentenanta previne problemele echipamentelor frig si asigura o buna functionare de lunga durata cat si mentinerea eficientei. Asiguram service periodic pentru intretinerea echipamentelor si inlocuirea pieselor defecte.',
      },];
    
      const merch_info = {'title': 'Despre noi', 'content': 'Noi, cei din echipa PRO C.R.F.H., va punem la dispozitie informatii despre produsele si serviciile oferite de noi. Firma noastra este specializata in industria frigului, iar echipa noastra este compusa din oameni pasionati, cu multi ani de experienta in acest domeniu. Scopul nostru este de a va facilita cat mai mult cu putinta procesele de selectare, montare si intretinere a echipamentelor frigorifice, pentru a asigura functionarea optima si de durata a acestora. '};

      const idk2=['Climatizare.', 'Refrigerare.', 'Congelare.', 'Incalzire.'];

      return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <Grid container rowSpacing={0}>
          <Grid item xs={12}><span className='homepage-welcome-text'>Bun venit in magazinul</span></Grid>
          <Grid item xs={12}>
            <h1 className='homepage-title'>PRO CRFH!</h1>
          </Grid>
          <Grid item xs={6}>
            <ul className='homepage-subtitle-list'>
              {idk2.map((item)=> {
                return (<li className='homepage-subtitle-list-item' key={item}>
                  <Typography variant='h4' color='#5099d7'><em>{item}</em></Typography>
                </li>)
              })}
            </ul>
          </Grid>
            <Grid className='homepage-desc-container' item xs={12} md={11}>
              <span className='homepage-desc'>{merch_info['content']}</span>
            </Grid>
            <Grid className='homepage-img-container' item md={12}>
              <Image width='1200px' height='980px' src='https://i.ibb.co/K0xYp9d/Vitrina.png' />
            </Grid>
          </Grid>
        </Grid>
        <Grid className='homepage-img-container' item md={6}>
          <Image src="https://i.ibb.co/cxdPn8Q/87876camera-frigorifica-refrigerare-congelare.png" width='1200px' height='800px'/>
        </Grid>
        <Grid className='homepage-title-container' item xs={12}>
            <Typography variant='h2'><strong>Produsele noastre</strong></Typography>
            <Divider variant='middle' />
        </Grid>
        <Grid item xs={1.5}/>
        {products.length && (<Grid item xs={9}>
            <Grid container spacing={3}>
                {
                    products.map(
                        (product) => {
                            return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                            <Product product={product}/>
                            </Grid>
                            );}
                    )
                }
            </Grid>
        </Grid>)}
        <Grid item xs={12} className="shop-button">
            <Button variant='contained' onClick={()=>{
              router.push('/shop');
            }}>Incepe cumparaturile!</Button>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='h3'>Servicii </Typography>
            <Divider />
        </Grid>
        {services.map((service) => {
          return(
          <Grid item className="service-card" md={4} key={service['title']}>
            <Paper>
              <Typography variant='h4'>{service['title']}</Typography>
              <Divider />
              <Typography variant='body1' className="content">{service['content']}</Typography>
            </Paper>
          </Grid>)
        })}
      </Grid>
    </>
  );
}

export default HomePage;
