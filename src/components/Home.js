import {Component} from 'react'
import Router from 'next/router'
import { Row } from 'antd'
import { connect } from 'react-redux'
import { getMovieData } from '../lib/Firebase'
import CardDetail from './CardDetail'
import Searchbar from './SearchBar'
import { updateMovie, updateMovieList } from '../action'

class Home extends Component {
  state={
    isData: false
  }
  componentDidMount(){
    this.getMovie()
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

  getMovie() {
    getMovieData().then((res)=>{
      const {dispatch} = this.props
      dispatch(updateMovie(res))
    })
  }

  render(){
    return(
      <div>
        <Searchbar />
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row type="flex" justify="space-around">
    {this.props.isData ? this.props.movieData.map((value, index)=><CardDetail data={value} onCardClick={this.onCardClick} index={index}/>) : <h2>Loading...</h2>}
          </Row>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movieData: state.movieData,
  isData: state.isData
})

export default connect(mapStateToProps)(Home)