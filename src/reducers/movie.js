import { sortByNameASC, sortByNameDESC, sortByDateASC, sortByDateDESC } from '../lib/sorting'

const exampleInitialState = {
  movieData: []
}
let data
export default (state = exampleInitialState, action) => {
  switch (action.type) {
    case 'MOVIES':
      return { ...state,
        movieData: action.payload,
        isData: true
      }
    case 'MOVIESLIST':
      return { ...state,
        movieList: action.payload
      }
    case 'SORTNAMEASC':
      console.log('state: ', state);
      
      data = action.payload
      data.sort(sortByNameASC)

      return {...state, 
        movieData: data,
        isData: true
      }
    case 'SORTNAMEDESC':
      console.log('state: ', state);
      
      data = action.payload
      data.sort(sortByNameDESC)

      return {...state, 
        movieData: data,
        isData: true
      }
      case 'SORTDATEASC':
      console.log('state: ', state);
      
      data = action.payload
      data.sort(sortByDateASC)

      return {...state, 
        movieData: data,
        isData: true
      }
    case 'SORTDATEDESC':
      console.log('state: ', state);
      
      data = action.payload
      data.sort(sortByDateDESC)

      return {...state, 
        movieData: data,
        isData: true
      }
    case 'CLEAR':
      return{ ...state,
        movieData: [],
        isData: false
      }
    default:
      return state
  }
}