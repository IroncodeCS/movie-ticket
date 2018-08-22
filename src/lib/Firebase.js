import _ from 'lodash'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyAgvOxce17TQmqwxRO1W2mfX2TSVBNfHYg",
  authDomain: "movie-ticket-95735.firebaseapp.com",
  databaseURL: "https://movie-ticket-95735.firebaseio.com",
  projectId: "movie-ticket-95735",
  storageBucket: "movie-ticket-95735.appspot.com",
  messagingSenderId: "122297263154"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
const Firebase = () => {
  const db = firebase.database().ref('movies')
  return db
}

export const getMovieData = () => {
  const movieData = new Promise((resolve) => {
    Firebase().orderByChild("name").startAt().on('value', (snap) => {
      resolve(snap.val())
    })
  })
 return movieData
}

export const searchMovie = (value) => {
  const movieData = new Promise((resolve) => {
    Firebase().orderByChild("name").equalTo(value).on("value", (snap) => {
      snap.forEach(element => {
        resolve([element.val()])
      })
    })
  })
 return movieData
}

export default Firebase
