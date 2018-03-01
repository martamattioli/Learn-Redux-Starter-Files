import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {/* what this does is take the children of this component and allow them to get passed the props */}
        { React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
};

export default Main;
