import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'

const navItems = [['Методичка', 'manual']]

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <header className='navbar'>
      <Box
        display='flex'
        justifyContent='space-between'
        width='100%'
        height='100%'
        alignItems='center'
        p='0px 50px'
       
      >
        <Typography
          letterSpacing='1px'
          
        >
          Методы и приборы измерения расхода
        </Typography>
        
        <Box
          display='flex'

        >
          {navItems.map((item) => (
           <Button key={item} variant="contained" size='small' sx={{marginLeft: '25px'}} onClick={() => navigate(item[1])}>
            {item[0]}
           </Button>
          ))}
        </Box>
      </Box>
    </header>
  )
}

export default Navbar