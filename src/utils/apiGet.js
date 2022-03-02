async function apiGet(country, continent) {
  if (country) {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_URL_BASE}/cases?country=${country}`
      )
      return response.json()
    } catch (error) {
      console.error(error)
      return null
    }
  } else if (continent) {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_URL_BASE}/cases?continent=${continent}`
      )
      return response.json()
    } catch (error) {
      console.error(error)
      return null
    }
  } else {
    try {
      let response = await fetch(`${process.env.REACT_APP_URL_BASE}/cases`)
      return response.json()
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

export default apiGet
