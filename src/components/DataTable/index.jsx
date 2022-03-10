import React, { Fragment } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import useStyles from './styles'

const DataTable = (props) => {
  const classes = useStyles()
  const navigate = useNavigate()

  const handleClick = (e) => {
    navigate('/country/' + e.id, { replace: true })
  }

  return (
    <Fragment>
      <DataGrid
        className={classes.root}
        rows={props.rows}
        columns={props.columns}
        rowsPerPageOptions={[50]}
        autoPageSize={true}
        components={{ Toolbar: GridToolbar }}
        onRowClick={handleClick}
      />
    </Fragment>
  )
}

export default DataTable
