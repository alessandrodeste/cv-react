var React = require('react');

function WorkCompany (props) {
  let formatDate = function(date) {
    function padStr(i) {
      return (i < 10) ? "0" + i : "" + i;
    }
    let dt = new Date(date);
    return padStr((1 + dt.getMonth())) + "/" + padStr(dt.getFullYear())                  
  };

  return (
    <div className="resume__work__company">
      <div className="resume__work__company__head">         
        <h3>{props.info.position} </h3>
        { props.info.company && <div className="resume__work__company__head__position">in {props.info.company}</div>}
        { props.info.startDate && <div className="resume__work__company__head__start"> from {formatDate(props.info.startDate)} </div>}
        { props.info.endDate && <div className="resume__work__company__head__end"> to {formatDate(props.info.endDate)}</div>}
        { !props.info.endDate && <div className="resume__work__company__head__end"> to present</div>}
      </div>
      <div className="resume__work__company__summary">
        <div className="summary" dangerouslySetInnerHTML={{__html: props.info.summary}} />

         <div className="highlights">
          {props.info.highlights.map(function(tag, i) {
            return <span key={i} className="badge">{tag}</span>
          })}
        </div>
      </div>
     
    </div>    
  )
}

module.exports = WorkCompany;