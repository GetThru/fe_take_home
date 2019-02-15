import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Question from "./Question";

class Survey extends React.Component {
  static propTypes = {
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        questionId: PropTypes.string.isRequired,
        choice: PropTypes.string.isRequired
      })
    ).isRequired,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        choices: PropTypes.arrayOf(PropTypes.string).isRequired
      })
    ).isRequired
  };

  render() {
    return (
      <div>
        <h2>Survey Questions</h2>
        <form>
          {this.props.questions.map(question => {
            return <Question question={question} key={question.id} />;
          })}
          <input type="submit" value="Finish Survey" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.answers,
    questions: Object.values(state.questions)
  };
};

export default connect(mapStateToProps)(Survey);
