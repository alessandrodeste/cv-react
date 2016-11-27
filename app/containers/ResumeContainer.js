var React = require('react');
var Resume = require('../components/Resume');
var Basics = require('../components/resume/Basics');
var Work = require('../components/resume/Work');
var Greetings = require('../components/resume/Greetings');
var resumeHelpers = require('../utils/resumeHelpers');

var ResumeContainer = React.createClass({
  getInitialState: function () {
    return {
      resume: {},
      isLoading: true
    }
  },
  componentDidMount: function () {
    
    resumeHelpers.get()
      .then(function (json) {
        // Refresh title
        if (json) document.title = json.basics.name + " - Curriculum Vitae";

        // Refresh page with data 
        this.setState({
            resume: json,
            isLoading: false
        })
      }.bind(this))
  },
  render: function () {
    return (
      <Resume isLoading={this.state.isLoading} >
        <Basics basics={this.state.resume.basics} />
        <Work work={this.state.resume.work} />
        { this.state.resume.greetings && <Greetings greetings={this.state.resume.greetings} /> }
      </Resume>
    )
  }
});

module.exports = ResumeContainer;