var React = require('react');
var Configs = require('../../config/configs.js')

function Basics (props) {

  return (
    <div className="resume__basic">      
      <div className="resume__basic__tops">      
        <h1>{props.basics.name}</h1>
        <h3>{props.basics.label}</h3>
      </div>

      <div className="resume__basic__detail">

        <div className="resume__basic__img">
          <img src={Configs.assetsPath + props.basics.picture} />
        </div>

        <div className="resume__basic__content">
          <div className="resume__basic__downloads">
            {props.basics.downloads.map(function(download, i) {
              return <a key={i} className="btn btn-primary" href={"../assets/" + download}><span className="glyphicon glyphicon-download" aria-hidden="true"></span> {download}</a>
            })}
          </div>
          <div className="location">
            Location: <a href={props.basics.location.map} target="_blank">{props.basics.location.city} ({props.basics.location.countryCode}) 
            <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span></a>
          </div>
          <div className="yearOfBirth">Year of birth: {props.basics.yearOfBirth}</div>
          <div className="phone"><a href={"tel: " + props.basics.phone}>{props.basics.phone}</a></div>
          <div className="email"><a href={"mailto: " + props.basics.email}>{props.basics.email}</a></div>
          {props.basics.profiles.map(function(profile, i) {
            return <div className="network" key={i}><a href={profile.url} target="_blank">{profile.url}</a></div>
          })}

        </div>
      </div>

      <div className="resume__basic__summary well">
        <div className="summary" dangerouslySetInnerHTML={{__html: props.basics.summary}} />
      </div>
    </div>
  )
}

module.exports = Basics;