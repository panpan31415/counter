import React from "react";
import "./App.css";
import { setActiveSession, updateTime } from "./actions/";
import { connect } from "react-redux";

const App = ({
  days,
  hours,
  minutes,
  seconds,
  activeSession,
  setActiveSession,
  updateTime
}) => {
  return (
    <div className="App">
      <header>
        <h4 className="App__subheader">BOOK NAME</h4>
        <h1 className="App__header">Understanding Redux - 1</h1>
      </header>

      <section className="Counter">
        <h4 className="App__subheader">TOTAL TIME SPENT ON THE PROJECT</h4>

        <main className="Counter--main">
          <div className="Counter--main__session">
            <span className="Counter__text--grey">ACTIVE SESSION: </span>
            <select
              className="Counter__text--grey"
              onChange={e => {
                setActiveSession(e.target.value);
              }}
              value={activeSession}
            >
              <option value="DAYS">DAYS</option>
              <option value="HOURS">HOURS</option>
              <option value="MINUTES">MINUTES</option>
              <option value="SECONDS">SECONDS</option>
            </select>
          </div>

          <div className="Counter--main__values">
            <div>
              <span className="App__text--white Counter__text--large">
                {days}
              </span>
              <span className="Counter__text--grey">DAYS</span>
            </div>

            <div className="Counter__separator">:</div>

            <div>
              <span className="App__text--white Counter__text--large">
                {hours}
              </span>
              <span className="Counter__text--grey">HOURS</span>
            </div>

            <div className="Counter__separator">:</div>

            <div>
              <span className="App__text--white Counter__text--large">
                {minutes}
              </span>
              <span className="Counter__text--grey">MINUTES</span>
            </div>

            <div className="Counter__separator">:</div>

            <div>
              <span className="App__text--white Counter__text--large">
                {seconds}
              </span>
              <span className="Counter__text--grey">SECONDS</span>
            </div>
          </div>
        </main>
        <div className="App__buttons">
          <button
            className="App__text--white"
            data-amount="1"
            onClick={e => {
              updateTime(activeSession, e.target.dataset.amount);
            }}
          >
            INCREASE
          </button>
          <button
            className="App__text--white"
            data-amount="-1"
            onClick={e => {
              updateTime(activeSession, e.target.dataset.amount);
            }}
          >
            DECREASE
          </button>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};
// const mapDispatchToProps = (setActiveSession, updateTime) => {
//   return;
// };

export default connect(
  mapStateToProps,
  { setActiveSession, updateTime }
)(App);
