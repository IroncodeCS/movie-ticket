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
  const db = firebase.database().ref()
  return db
}

export const getMovieData = (db) => {
  const movieData = new Promise((resolve) => {
    Firebase().once('value').then((snap) => {
      resolve(snap.val().movies)
    })
  })
 return movieData
}

export const searchMovie = (value) => {
  const movieData = new Promise((resolve) => {
    const db = firebase.database().ref(`movies/${value}`)
    db.once('value').then((snap) => {
      resolve(snap.val())
    })
  })
 return movieData
}

export default Firebase
