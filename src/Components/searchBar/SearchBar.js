import { IconButton, Paper } from '@mui/material';
import React, { useState } from 'react'
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useDispatch } from 'react-redux';
import { fetchProductsWithQuery } from '../../Redux/Products/productsAction';
function SearchBar() {
    const dispatch=useDispatch()
    const [query,setQuery]=useState("");

    const searchFunction=(e)=>{
        e.preventDefault()
dispatch(fetchProductsWithQuery(e.target.value))
    }
  return (
    <Paper
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:"50%",color:"black", marginLeft:"25%",
     boxShadow:'0.5rem 0.5rem 0.8rem black',
     position:"fixed",
    top:"30vh",
     }}
  >
    <InputBase
      sx={{ ml: 1, flex: 1,fontWeight:"bold"}}
      placeholder="Search Here For Products"
      inputProps={{ 'aria-label': 'search google maps' }}
      onKeyUp={(e)=>{setQuery(e.target.value);
        searchFunction(e)}}
      
    />
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
   
   
  </Paper>
  )
}

export default SearchBar