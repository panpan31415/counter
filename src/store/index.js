import {createStore} from "redux";
import reducer from "../reducers/";
const state = {
    days: 11,
    hours: 31,
    minutes: 27,
    seconds: 11,
    activeSession: "DAYS"
  };

  const store = createStore(reducer,state);

  export default store;

