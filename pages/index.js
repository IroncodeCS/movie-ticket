import React from 'react'
import { withRouter } from 'next/router'
import Home from '../src/components/Home'
import Searchbar from '../src/components/SearchBar';

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