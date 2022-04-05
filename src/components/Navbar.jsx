import React from 'react'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { Newspaper } from '@mui/icons-material'

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton color='inherit' size='small'>  
          <Newspaper/>
        </IconButton>
        <Typography color='inherit' variant='h4' flexGrow='1' >
          News
        </Typography>
        <Stack direction='row' spacing={2}>
            <Button color='inherit' size='large'>Home</Button>
            <Button color='inherit' size='large'>About</Button>

        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar