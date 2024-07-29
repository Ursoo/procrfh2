import { IconButton, InputBase, Paper, Typography } from '@mui/material';
import React from 'react';
import { Search } from '@mui/icons-material';
import { useStateContext } from '../../context/StateContext';



const Searchbar = () => {
    const { handleInputChange, handleSearch, resultMessage } = useStateContext();
  return (
    <div className='searchbar'>
        <Paper component="form" className='searchbar-background' onSubmit={handleSearch}>
            <InputBase
            className="input"
            onChange={handleInputChange}
            placeholder= "Cauta produs..."
            inputProps={{"aria-label": "Cauta produs"}}/>
            <IconButton className='searchbar-icon' size='small' type="submit" aria-label="Cautare">
                <Search />
            </IconButton>
            {resultMessage && <Typography>{resultMessage}</Typography>}
        </Paper>
      
    </div>
  );
}

export default Searchbar;
