import { useMemo, useState } from 'react'
import apiGet from '../utils/apiGet'

const useAll = () => {
  const [global, setGlobal] = useState([])
  const [rows, setRows] = useState([])

  const columns = [
    { field: 'ab', headerName: 'ID', minWidth: 50, maxWidth: 50 },
    { field: 'country', headerName: 'Country', minWidth: 130, flex: 1 },
    {
      field: 'confirmed',
      headerName: 'Confirmed',
      type: 'number',
    },
    {
      field: 'deaths',
      headerName: 'Deaths',
      type: 'number',
    },
    {
      field: 'population',
      headerName: 'Population',
      type: 'number',
      minWidth: 130,
    },
  ]

  // valueGetter: (params) =>
  // `${params.row.firstName || ''} ${params.row.lastName || ''}`

  function formatRows(response) {
    let row

    Object.entries(response).forEach(([key, value]) => {
      row = {
        id: key,
        ab: value.All.abbreviation,
        country: value.All.country,
        confirmed: value.All.confirmed,
        deaths: value.All.deaths,
        population: value.All.population,
      }
      setRows((rows) => [...rows, row])
    })
  }

  useMemo(async () => {
    const response = await apiGet(null, null)

    if (response) {
      setGlobal(response.Global.All)
      formatRows(response)
    }
  }, [])

  return {
    global,
    rows,
    columns,
  }
}

export default useAll
