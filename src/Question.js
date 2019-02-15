import React from "react";
import PropTypes from "prop-types";

export default class Question extends React.Component {
  static propTypes = {
    question: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      choices: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  };

  render() {
    const { question } = this.props;
    return (
      <div>
        <span>{question.text}</span>
        <div>{this.renderChoices()}</div>
      </div>
    );
  }

  renderChoices() {
    const { question } = this.props;

    return question.choices.map((choice, index) => {
      const choiceId = `choice-${question.id}-${index}`;

      return (
        <div key={choiceId}>
          <input type="radio" id={choiceId} name={question.id} value={choice} />
          <label htmlFor={choiceId}>{choice}</label>
        </div>
      );
    });
  }
}
