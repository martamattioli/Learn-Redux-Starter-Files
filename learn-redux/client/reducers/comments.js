// a reducer takes in two things:
  // the action
  // a copy of the current state (store)

// then it does some stuff based on the action that we want to generate

// and finally it returns the updated store

function comments(state = [], action) {
  console.log(state, action);
  return state;
}

export default comments;
