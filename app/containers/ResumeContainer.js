import React, { Component } from 'react';
import Greetings from '../components/resume/Greetings';
import Work from '../components/resume/Work';
import Basics from '../components/resume/Basics';
import Resume from '../components/Resume';

var Promise = require('promise-polyfill'); // poor ie polyfill

class ResumeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resume: {},
      isLoading: true
    }
  }

  loadJsonResume() {
    return new Promise(function(resolve, reject) {
      var data = require('../../assets/resume.json');
      resolve(data);      
    }).catch(function (err) {console.warn('Error in load json: ', err)});
  }

  componentDidMount() {    
    this.loadJsonResume()
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