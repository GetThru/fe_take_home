const initialState = [
  {
    completedAt: Date.now(),
    answers: [{ questionId: "1", choice: "Great" }]
  }
];

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;

export const completedSurveys = state => {
  return Object.values(state.results).length;
};
