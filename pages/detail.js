import React from 'react'
import { withRouter } from 'next/router'
import CardDetail from '../src/components/CardDetail'

const detail = (router) => {
  const data = router.router.query
  return (
    <div>
      <CardDetail data={data}/>
    </div>
)}

export default withRouter(detail)