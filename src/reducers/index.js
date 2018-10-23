import * as action_types from "../actions/actionList";

const reducer = (state, action) => {
  switch (action.type) {
    case action_types.SET_ACTIVE_SESSION: {
      return { ...state, activeSession: action.payload };
    }
    case action_types.UPDATE_DAYS: {
      return {
        ...state,
        days: parseInt(state.days, 10) + parseInt(action.payload, 10)
      };
    }
    case action_types.UPDATE_HOURS: {
      return {
        ...state,
        hours: parseInt(state.hours, 10) + parseInt(action.payload, 10)
      };
    }
    case action_types.UPDATE_MINUTES: {
      return {
        ...state,
        minutes: parseInt(state.minutes, 10) + parseInt(action.payload, 10)
      };
    }
    case action_types.UPDATE_SECONDS: {
      return {
        ...state,
        seconds: parseInt(state.seconds, 10) + parseInt(action.payload, 10)
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
