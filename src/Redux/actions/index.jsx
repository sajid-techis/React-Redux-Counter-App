export const actionTypes = {
  INCREMENT_COUNTER: "INCREMENT_COUNTER",
  DECREMENT_COUNTER: "DECREMENT_COUNTER",
  CHANGE_COUNT: "CHANGE_COUNT",
};

export const increment = () => {
  return function (dispatch) {
    dispatch({
      type: actionTypes.INCREMENT_COUNTER,
    });
  };
};

export const decrement = () => {
  return function (dispatch) {
    dispatch({
      type: actionTypes.DECREMENT_COUNTER,
    });
  };
};


export const changeCountTo = (numberChange) => {
  return function (dispatch) {
    dispatch({ type: actionTypes.CHANGE_COUNT, payload: numberChange });
  };
};
