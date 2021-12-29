import React from 'react';

class FormFeedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonGood = () => {
    this.setState(preState => {
      return {
        good: preState.good + 1,
      };
    });
  };

  onButtonNeutral = () => {
    this.setState(preState => {
      return {
        neutral: preState.neutral + 1,
      };
    });
  };

  onButtonBad = () => {
    this.setState(preState => {
      return {
        bad: preState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.onButtonGood}>
          Good
        </button>
        <button type="button" onClick={this.onButtonNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.onButtonBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <span>Good: {this.state.good}</span>
        <span>Neutral: {this.state.neutral}</span>
        <span>Bad: {this.state.bad}</span>
      </div>
    );
  }
}

export default FormFeedback;
