import { useMemo, useState } from 'react'
import apiGet from '../utils/apiGet'

const useCountry = (props) => {
  const [country, setCountry] = useState(null)

  useMemo(async () => {
    setCountry(await apiGet(props, null))
  }, [])

  return {
    country,
  }
}

export default useCountry
