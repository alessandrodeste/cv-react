var React = require('react');
var Loading = require('./Loading');

function Resume (props) {
  if (props.isLoading === true) {
    return <Loading />
  }

  return (
    <div className="resume__container">
      {props.children}
    </div>            
  )
}

module.exports = Resume;