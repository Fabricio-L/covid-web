import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

const Country = () => {
  const { country } = useParams()

  return (
    <Fragment>
      <div>Country</div>
      <div>{country}</div>
    </Fragment>
  )
}

export default Country
