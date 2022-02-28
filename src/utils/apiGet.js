async function apiGet({ endpoint, params }) {
  try {
    let response = await fetch(`${REACT_APP_URL_BASE}/${endpoint}?${params}`)
    return response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}
