import { useMemo, useState } from 'react'
import apiGet from '../utils/apiGet'

const useCountry = (props) => {
  const [info, setInfo] = useState(null)

  useMemo(async () => {
    setInfo(await apiGet(props, null))
  }, [props])

  return {
    info,
  }
}

export default useCountry
