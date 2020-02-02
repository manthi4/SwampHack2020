import React, { Component } from "react";
import CruiseFront from "./CruiseFront.jpg";
console.log(CruiseFront);

class Window extends Component {
  /* generate state */
  state = {
    shipView: "cruiseFront"
  };

  /* render components */
  render() {
    return (
      <div>
        {/* navigation bar */}
        <nav class="navbar navbar-expand-md">
          <a class="navbar-brand" href="#">
            Carnival Migration Map
          </a>

          <button
            class="navbar-toggler navbar-dark"
            type="button"
            data-toggle="collapse"
            data-target="#main-navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button

          <div class="collapse navbar-collapse" id="main-navigation">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Ship
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Trip
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Level
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* display ship */}
        <span style={{ fontSize: 50 }} className="badge badge-light m-2">
          {this.levelName()}
          {this.shipView()}
        </span>
      </div>
    );
  }

  /* display ship image */
  shipView() {
    return <img src={CruiseFront} class="img-responsive" alt="CruiseFront" />;
  }

  /* displaay selected level */
  levelName() {
    const { shipView } = this.state;
    return shipView === "cruiseFront" ? "All Levels " : shipView;
  }
}

export default Window;
