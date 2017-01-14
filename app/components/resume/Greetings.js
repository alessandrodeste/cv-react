import React, { Component } from 'react';

class Greetings extends Component {
 
  render() {
    return (
      <div className="resume__greetings">
          <div className="panel-footer" dangerouslySetInnerHTML={{__html: this.props.greetings}} />
      </div>
    );
  }
}

export default Greetings;