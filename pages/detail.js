import React from 'react'
import { withRouter } from 'next/router'
import Firebase from '../src/lib/Firebase';

const detail = (router) => {
  const db = Firebase()
  const { name, src, detail } = router.url.query
  return (
    <div>
      Firebase
    </div>
)}

export default withRouter(detail)