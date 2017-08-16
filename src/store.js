import  { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import auth, {syncUser} from './state/auth'
import { fetchEntries } from './state/fetchingdata'
import entries, {initEntriesSync} from './state/entries'


import firebase from 'firebase'

const reducer = combineReducers({
    auth,
    entries
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    thunk
  )
))

firebase.initializeApp({
    apiKey: "AIzaSyDzaBvp_6fPtd_bVW1vWnBIa1RyomN-4iQ",
    authDomain: "journal-of-feelings.firebaseapp.com",
    databaseURL: "https://journal-of-feelings.firebaseio.com",
    projectId: "journal-of-feelings",
    storageBucket: "journal-of-feelings.appspot.com",
    messagingSenderId: "700071321149"
})


firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(initEntriesSync())
  }
  store.dispatch(syncUser(user))
})

store.dispatch(fetchEntries())


export default store