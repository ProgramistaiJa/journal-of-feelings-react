import firebase from 'firebase'

const SYNC = 'entries/SYNC'

const syncEntries = entries => ({
  type: SYNC,
  entries
})

export const initEntriesSync = () => dispatch => {
  const userId = firebase.auth().currentUser.uid
  firebase.database().ref('entries/' + userId).on(
    'value',
    snapshot => {
      const val = snapshot.val() || {}
      const entries = Object.keys(val).map(
        uid => ({...val[uid], uid})
      )
      dispatch(syncEntries(entries))
    }
  )
}

export const createEntry = data => dispatch => {
  const userId = firebase.auth().currentUser.uid
  const ref = firebase.database().ref('entries/' + userId).push()
  ref.set({
    date: data.date,
    feelings: data.feelings,
    when: data.when,
    author: firebase.auth().currentUser.displayName
  })
}

export const updateEntry = (uid, data) => dispatch => {
  const userId = firebase.auth().currentUser.uid
  const ref = firebase.database().ref('entries/' + userId + '/' + uid)
  ref.update({
    date: data.date,
    feelings: data.feelings,
    when: data.when
  })
}

export const deleteEntry = uid => dispatch => {
  const userId = firebase.auth().currentUser.uid
  const ref = firebase.database().ref('/entries/' + userId + '/' + uid)
  ref.remove()
}

const initialState = {
  data: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SYNC:
      return {
        ...state,
        data: action.entries
      }
    default:
      return state
  }
}

