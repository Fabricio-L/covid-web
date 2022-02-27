import React, { Fragment } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import darkTheme from './themeConfig'

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box height={'100vh'}>Covid App</Box>
      </ThemeProvider>
    </Fragment>
  )
}

export default App
