import { Box, Typography } from '@mui/material'
import useStyles from './styles'

const GlobalCard = ({ global }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Global
      </Typography>
      <Typography>Population: {global.population}</Typography>
      <Typography>Confirmed: {global.confirmed}</Typography>
      <Typography>Deaths: {global.deaths}</Typography>
    </Box>
  )
}

export default GlobalCard
