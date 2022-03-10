import React, { Fragment } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import darkTheme from './themeConfig'
import Home from './views/Home'
import Country from './views/Country'
import Continent from './views/Continent'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box height={'100vh'}>
          <Header />
          <Box maxWidth={'80vw'} margin={'auto'}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/country/:country" element={<Country />} />
              <Route
                exact
                path="/continent/:continent"
                element={<Continent />}
              />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </Fragment>
  )
}

export default App
