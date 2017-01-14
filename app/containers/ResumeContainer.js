import React, { Component } from 'react';
import Greetings from '../components/resume/Greetings';
import Work from '../components/resume/Work';
import Basics from '../components/resume/Basics';
import Resume from '../components/Resume';

var resumeHelpers = require('../utils/resumeHelpers');

class ResumeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resume: {},
      isLoading: true
    }
  }

  componentDidMount() {    
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
  }

  render() {
    return (
      <Resume isLoading={this.state.isLoading} >
        <Basics basics={this.state.resume.basics} />
        <Work work={this.state.resume.work} />
        { this.state.resume.greetings && <Greetings greetings={this.state.resume.greetings} /> }
      </Resume>
    )
  }
}

export default ResumeContainer;