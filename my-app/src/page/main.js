import React, { Component } from 'react';

class main extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
        <div className='Mains'>
          <div id='Mains-left'>
            <h3> Left Side </h3>
          </div>

          <div>
          <h2> This is Main layout </h2>
          </div>

          <div id='Mains-right'>
            <h3> Right Side </h3>
          </div>

        </div>
    );
  }
}

export default main;
