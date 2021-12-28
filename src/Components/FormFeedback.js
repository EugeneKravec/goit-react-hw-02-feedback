import React from 'react';

class FormFeedback extends React.Component {
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button
          type="button"
          onClick={() => {
            console.log('КЛикнули на кнопку Good');
          }}
        >
          Good
        </button>
        <button
          type="button"
          onClick={() => {
            console.log('КЛикнули на кнопку Neutral');
          }}
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={() => {
            console.log('КЛикнули на кнопку Bad');
          }}
        >
          Bad
        </button>
        <h2>Statistics</h2>
        <span>Good: 3</span>
        <span>Neutral: 2</span>
        <span>Bad: 2</span>
      </div>
    );
  }
}

export default FormFeedback;
