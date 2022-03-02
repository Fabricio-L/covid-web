import React, { Fragment } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import useAll from '../../hooks/useAll'
import GlobalCard from '../GlobalCard'

const DataTable = () => {
  const navigate = useNavigate()
  const { global, rows, columns } = useAll()

  const handleClick = (e) => {
    navigate('./country/' + e.id, { replace: true })
  }

  return (
    <Fragment>
      <GlobalCard global={global} />

      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[50]}
        autoPageSize={true}
        components={{ Toolbar: GridToolbar }}
        onRowClick={handleClick}
      />
    </Fragment>
  )
}

export default DataTable
