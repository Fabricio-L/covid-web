import React, { Fragment } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import darkTheme from './themeConfig'
import Home from './views/Home'

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box height={'100vh'}>
          <Home />
        </Box>
      </ThemeProvider>
    </Fragment>
  )
}

export default App
