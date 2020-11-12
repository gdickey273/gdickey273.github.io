import React from "react";
import "./style.css";
import Project from "../../components/Project";

function Portfolio(props) {
  return (
    <main className="container mt-5">
      <div className="row">
        <div className="content portfolio col-lg-8 col-md-8 col-sm-12 col-xs-12">


          <div className="row">
            <header className="ml-2 mt-4 col-md-12">
              <h3>Portfolio</h3>
            </header>
          </div>


          <div className="row">
            <div className="col-md-12">
              <hr className="solid mx-2" />
            </div>
          </div>

          <div className="row mt-2 mt-xs-0">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-xs-2">
              <Project deployedLink="https://gdickey273.github.io/whats-in-the-pantry/"src="assets/images/whats-in-the-pantry.png" title="What's In The Pantry" />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-xs-2">
              <Project deployedLink="https://project-2-team-7.herokuapp.com/"src="assets/images/coffeehut.png" title="CoffeeHut Remote Ordering System" />
            </div>
          </div>

          <div className="row mt-2 mt-xs-0">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-xs-2">
              <Project deployedLink="https://calm-mountain-13174.herokuapp.com/"src="assets/images/burger-screenshot.png" title="Eat-Da-Burger" />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-xs-2">
              <Project deployedLink="https://gdickey273.github.io/code-quiz/"src="assets/images/code-quiz.png" title="Code Quiz" />
            </div>
          </div>

          <div className="row mt-2 mt-xs-0">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-xs-2">
              <Project deployedLink="https://gdickey273.github.io/weather-dashboard/" src="assets/images/weather-dashboard.png" title="Weather Dashboard" />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-xs-2">
              <Project deployedLink="https://gdickey273.github.io/work-day-scheduler/" src="assets/images/work-day-scheduler.png" title="Workday Scheduler" />
            </div>
          </div>


        </div>
      </div>
    </main>

  );
}

export default Portfolio;