import React from 'react';
import Loading from './Loading';

const Resume = (props) => {
  if (props.isLoading === true) {
    return <Loading />
  }

  return (
    <div className="resume__container">
      {props.children}
    </div>            
  );
}

export default Resume;