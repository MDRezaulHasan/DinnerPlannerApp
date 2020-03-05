import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <div className="nav-image"></div>
        <div className="nav-text">
          <p>
            Welcome to the dinner planner! We are ready for planning your lovely
            dinner.
          </p>
          <Link to="/selectDish/search">
            <button className="btn btn-primary">Start planning</button>
          </Link>

          <p>
            In our website you can search your food and ingredients of your
            selected food. You can calculate the total costing of food and
            manage the calory scale. After selecting your food you can confirm
            it by using confirm button and print the whole planning page.
          </p>
        </div>
        <hr />
        <hr />
        <hr />
        <h1>Information about developers.</h1>

        <div className="nav-text col-md-4">
            <table border="1">
              <h3>Md Rezaul Hasan </h3>
              <h5>Software developer</h5>
              <p>
                Studying in master of software engineering in distributed
                system. University name is KTH Royal Institute of Technology,
                Stockholm, Sweden
              </p>
              <h6>Skills:</h6>
              <li>React</li>
              <li>JavaScript</li>
              <li>Database: Firbase, MySQL, MongoDB</li>
            </table>
          </div>
        </div>
    );
  }
}

export default Welcome;
