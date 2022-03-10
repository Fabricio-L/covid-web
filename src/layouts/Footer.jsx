import React from 'react'
import { Typography, Box } from '@mui/material'
import github from '../assets/github.svg'
import useStyles from './styles'

const Footer = () => {
  const classes = useStyles()

  return (
    <Box display={'flex'} className={classes.rootFooter}>
      <Typography variant="h7">Repository</Typography>
      <a
        href="https://github.com/Fabricio-L/covid-web"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={github}
          className={classes.imgFooter}
          style={{ marginRight: '30px' }}
          alt="Github"
        />
      </a>
    </Box>
  )
}

export default Footer
