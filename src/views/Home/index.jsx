import React from 'react'
import DataTable from '../../components/DataTable'
import GlobalCard from '../../components/GlobalCard'
import useAll from '../../hooks/useAll'
import useStyles from './styles'

const Home = () => {
  const classes = useStyles()
  const { global, rows, columns } = useAll()

  return (
    <div className={classes.root}>
      <GlobalCard global={global} />
      <DataTable columns={columns} rows={rows} />
    </div>
  )
}

export default Home
