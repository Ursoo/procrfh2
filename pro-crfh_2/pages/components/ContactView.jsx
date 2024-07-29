import { Paper, Slide, Typography, Divider } from '@mui/material';
import React from 'react';

const ContactView = ({ isActive }) => {

  const contactDetails = [{
    'title': 'Informatii despre stoc si preturi',
    'email': 'vanzari@procrfh.com',
    'telefon': '0746 940 947',
  }, {
    'title': 'Informatii despre servicii',
    'email': 'service@procrfh.com',
    'telefon': '0723 176 457',
}];

  return (
    <div className='contact-card'>
      <Slide direction='down' in={isActive}>
      <Paper className='contact-card-background'>
        <Typography variant='h5'>
          Contact
        </Typography>
        <Divider />
        {contactDetails.map(( item )=>{
          return (
            <>
            <Typography variant='h6'>{ item['title'] }</Typography>
            <Typography variant='body2'><b>E-mail:</b> {item['email']}
            <br />
            <b>Telefon:</b> {item['telefon']}
            </Typography>
            </>
          );
        })}
      </Paper>
      </Slide>
    </div>
  );
}

export default ContactView;
