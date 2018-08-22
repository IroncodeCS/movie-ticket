const updateMovie = (movie) => dispatch => dispatch({
  type: 'MOVIES',
  payload: movie
})

const updateMovieList = (movie) => dispatch => dispatch({
  type: 'MOVIESLIST',
  payload: movie
})

const sortMovieByName = (movie, type = 'asc') => dispatch => {
  if(type === 'desc'){
    return dispatch({
      type: 'SORTNAMEDESC',
      payload: movie
    })
  } else {
    return dispatch({
      type: 'SORTNAMEASC',
      payload: movie
    })
}}

const sortMovieByDate = (movie, type = 'asc') => dispatch => {
  if(type === 'desc'){
    return dispatch({
      type: 'SORTDATEDESC',
      payload: movie
    })
  } else {
    return dispatch({
      type: 'SORTDATEASC',
      payload: movie
    })
}}

const clear = () => dispatch => dispatch({
  type: 'CLEAR',
  payload: []
})

export { updateMovie, updateMovieList, sortMovieByName, sortMovieByDate, clear }