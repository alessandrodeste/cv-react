import React, { Component } from 'react';
var Configs = require('../../config/configs.js')

class Basics extends Component {

  render() {
    return (
      <div className="resume__basic">      
        <div className="resume__basic__tops">      
          <h1>{this.props.basics.name}</h1>
          <h3>{this.props.basics.label}</h3>
        </div>

        <div className="resume__basic__detail">

          <div className="resume__basic__img">
            <img src={Configs.assetsPath + this.props.basics.picture} />
          </div>

          <div className="resume__basic__content">
            <div className="resume__basic__downloads">
              {this.props.basics.downloads.map(function(download, i) {
                return <a key={i} className="btn btn-primary" href={"../assets/" + download} target="_blank"><span className="glyphicon glyphicon-download" aria-hidden="true"></span> {download}</a>
              })}
            </div>
            <div className="location">
              Location: <a href={this.props.basics.location.map} target="_blank">{this.props.basics.location.city} ({this.props.basics.location.countryCode}) 
              <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span></a>
            </div>
            <div className="yearOfBirth">Year of birth: {this.props.basics.yearOfBirth}</div>
            <div className="phone"><a href={"tel: " + this.props.basics.phone}>{this.props.basics.phone}</a></div>
            <div className="email"><a href={"mailto: " + this.props.basics.email}>{this.props.basics.email}</a></div>
            {this.props.basics.profiles.map(function(profile, i) {
              return <div className="network" key={i}><a href={profile.url} target="_blank">{profile.url}</a></div>
            })}

          </div>
        </div>

        <div className="resume__basic__summary well">
          <div className="summary" dangerouslySetInnerHTML={{__html: this.props.basics.summary}} />
        </div>
      </div>
    );
  }
}
export default Basics;
