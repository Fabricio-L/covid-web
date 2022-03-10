import React from 'react'
import { useParams } from 'react-router-dom'
import DataTable from '../../components/DataTable'
import useStyles from './styles'
import useContinent from '../../hooks/useContinent'

const Continent = () => {
  const classes = useStyles()
  const { continent } = useParams()
  const { rows, columns } = useContinent(continent)

  return (
    <div className={classes.root}>
      <DataTable columns={columns} rows={rows} />
    </div>
  )
}

export default Continent
