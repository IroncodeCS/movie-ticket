import {Component} from 'react'
import { Input } from 'antd'
import { connect } from 'react-redux'
import { searchMovie } from '../lib/Firebase'
import { updateMovie, sortMovieByName, sortMovieByDate, clear } from '../action'

const Search = Input.Search

class Searchbar extends Component {
  state={
    isData: false
  }

  onSearch(value){
    searchMovie(value).then((res)=>{
      const {dispatch} = this.props
      dispatch(updateMovie(res))
    })
  }

  sortingData(){
    const {dispatch, movieData} = this.props
    dispatch(clear())
    dispatch(sortMovieByDate(movieData, 'desc'))
  }
  render(){
  return(
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="small"
        onSearch={value => value ? this.onSearch(value) : this.sortingData()}
    />
  )
}}

const mapStateToProps = state => ({
  movieData: state.movieData,
  isData: state.isData
})

export default connect(mapStateToProps)(Searchbar) 