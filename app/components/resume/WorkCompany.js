import React, { Component } from 'react';

class WorkCompany extends Component {
  
  formatDate(date) {
    function padStr(i) {
      return (i < 10) ? "0" + i : "" + i;
    }
    let dt = new Date(date);
    return padStr((1 + dt.getMonth())) + "/" + padStr(dt.getFullYear())                  
  };
  
  render() {
    return (
      <div className="resume__work__company">
        <div className="resume__work__company__head">         
          <h3>{this.props.info.position} </h3>
          { this.props.info.company && <div className="resume__work__company__head__position">in {this.props.info.company}</div>}
          { this.props.info.startDate && <div className="resume__work__company__head__start"> from {this.formatDate(this.props.info.startDate)} </div>}
          { this.props.info.endDate && <div className="resume__work__company__head__end"> to {this.formatDate(this.props.info.endDate)}</div>}
          { !this.props.info.endDate && <div className="resume__work__company__head__end"> to present</div>}
        </div>
        <div className="resume__work__company__summary">
          <div className="summary" dangerouslySetInnerHTML={{__html: this.props.info.summary}} />

          <div className="highlights">
            {this.props.info.highlights.map(function(tag, i) {
              return <span key={i} className="badge">{tag}</span>
            })}
          </div>
        </div>
      
      </div>    
    );
  }
}

export default WorkCompany;
