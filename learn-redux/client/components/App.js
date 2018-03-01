import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

// these are two functions which are gonna take state (posts and comments) and our actions, and is going to surface that data via props into our component
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// basically this is going to take my Main, and pair it up with all the state and actions that I need
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
