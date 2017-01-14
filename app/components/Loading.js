import React, { Component, PropTypes } from 'react';

var styles = {  
  content: {
    fontSize: '55px',
    textAlign: 'center',
    width: '100%',
    padding: '30px 30px 160px 30px',
  }
}

class Loading extends Component {
   constructor(props) {
    super(props);

    this.originalText = this.props.text;
    this.state = {
      text: this.originalText
    }
  }

  componentDidMount() {
    var stopper = this.originalText + '...'
    this.interval = setInterval(function () {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }.bind(this), this.props.speed)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}

module.exports = Loading