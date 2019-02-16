import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Question from "./Question";
import { allQuestions } from "./store/questions";

class Survey extends React.Component {
  static propTypes = {
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
    questions: allQuestions(state)
  };
};

export default connect(mapStateToProps)(Survey);
