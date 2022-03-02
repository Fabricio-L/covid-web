import React from 'react'
import DataTable from '../../components/DataTable'
import useStyles from './styles'

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <DataTable />
    </div>
  )
}

export default Home
