import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CoronavirusIcon from '@mui/icons-material/Coronavirus'
import useStyles from './styles'

const Header = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/', { replace: true })
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Box className={classes.rootHeader} onClick={handleClick}>
          <CoronavirusIcon />
          <Typography variant="h5" flexGrow={1} style={{ marginLeft: '20px' }}>
            Covid Cases
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
