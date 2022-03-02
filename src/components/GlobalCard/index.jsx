import { Box, Typography } from '@mui/material'

const GlobalCard = ({ global }) => {
  return (
    <Box>
      <Typography>Global</Typography>
      <Typography>Population: {global.population}</Typography>
      <Typography>Confirmed: {global.confirmed}</Typography>
      <Typography>Deaths: {global.deaths}</Typography>
    </Box>
  )
}

export default GlobalCard
