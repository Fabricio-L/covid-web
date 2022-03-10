import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, Button, Stack } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public'
import useStyles from './styles'
import useCountry from '../../hooks/useCountry'

const Country = () => {
  const navigate = useNavigate()
  const classes = useStyles()
  const { country } = useParams()
  const { info } = useCountry(country)

  const handleClick = () => {
    navigate('/continent/' + info.All.continent, { replace: true })
  }

  return (
    <div className={classes.root}>
      <Box className={classes.boxMain}>
        <Stack spacing={2} direction="row" className={classes.boxTitle}>
          <Typography variant="h4" color="black">
            {country}
          </Typography>
          <Button
            color="primary"
            variant="contained"
            size="small"
            disableElevation
            startIcon={<PublicIcon />}
            onClick={handleClick}
          >
            {info ? info.All.continent : 'Loading...'}
          </Button>
        </Stack>
        <Box className={classes.boxData}>
          <Typography>
            Population: {info ? info.All.population : 'Loading...'}
          </Typography>
        </Box>
        <Box className={classes.boxData}>
          <Typography>
            Confirmed: {info ? info.All.confirmed : 'Loading...'}
          </Typography>
        </Box>
        <Box className={classes.boxData}>
          <Typography>
            Deaths: {info ? info.All.deaths : 'Loading...'}
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Country
