import React, { Component } from 'react';
import WorkCompany from './WorkCompany';


class Work extends Component {
 
  render() {
    return (
      <div className="resume__work">      
        {!this.props.work ? "" : this.props.work.map(function(company, i) {
          return <WorkCompany key={i} info={company} />
        })}
      </div>
    );
  }
}

export default Work;