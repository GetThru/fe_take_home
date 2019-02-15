import React from "react";
import { connect } from "react-redux";
import { completedSurveys } from "./store/results";

class SurveyResults extends React.Component {
  render() {
    return (
      <div>
        <span>Completed Surveys: {this.props.completedSurveys}</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    completedSurveys: completedSurveys(state)
  };
};

export default connect(mapStateToProps)(SurveyResults);
