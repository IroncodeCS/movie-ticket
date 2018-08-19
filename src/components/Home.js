import React from 'react'
import Router from 'next/router'
import { Row } from 'antd'
import { getMovieData, searchMovie } from '../lib/Firebase'
import CardDetail from './CardDetail'
import Searchbar from './SearchBar';

class Home extends React.Component {
  state = {
    movie: null
  }

  componentDidMount(){
    // this.getMovie()
    this.onSearch()
  }

  onSearch(value){
    searchMovie(value).then((res)=>{
      this.setState({
          movie: res
        })
      })
  }

  onCardClick(name, src, detail){
    return (e) => {
      e.preventDefault()
      Router.push({
        pathname: '/detail',
        query: {
          name,
          src,
          detail
        }
      })
    }
  }

  // getMovie() {
  //   getMovieData().then((res)=>{
  //   this.setState({
  //       movie: res
  //     })
  //   })
  // }

  render(){
    return(
      <div>
        <Searchbar onSearch={this.onSearch} />
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row type="flex" justify="space-around">
            {this.state.movie ? <CardDetail data={this.state.movie} onCardClick={this.onCardClick} /> : <h2>Loading...</h2>}
          </Row>
        </div>
      </div>
    )
  }
}

export default Home