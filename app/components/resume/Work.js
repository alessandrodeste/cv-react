var React = require('react');
var WorkComapny = require('./WorkCompany.js')

function Work (props) {

  return (
    <div className="resume__work">      
      {!props.work ? "" : props.work.map(function(company, i) {
        return <WorkComapny key={i} info={company} />
      })}
    </div>
  )
}

module.exports = Work;