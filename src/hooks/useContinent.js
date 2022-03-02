import { useMemo, useState } from 'react'
import apiGet from '../utils/apiGet'

const useContinent = (props) => {
  const [continent, setContinent] = useState(null)

  useMemo(async () => {
    setContinent(await apiGet(null, props))
  }, [])

  return {
    continent,
  }
}

export default useContinent
