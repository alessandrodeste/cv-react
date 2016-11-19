var React = require('react');

function Greetings (props) {
  return (
    <div className="resume__greetings">
        <div className="panel-footer" dangerouslySetInnerHTML={{__html: props.greetings}} />
    </div>
  )
}

module.exports = Greetings;