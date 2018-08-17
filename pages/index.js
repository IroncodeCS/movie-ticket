import React from 'react'
import Home from '../src/components/Home'
import { withRouter } from 'next/router'

class index extends React.Component {
componentDidMount() {
  const { router } = this.props
  router.prefetch('/index')
}
  render() {
    return(
        <div>
        <Home />
        </div>
    )
  }}

export default withRouter(index)