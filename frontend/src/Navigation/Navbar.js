import React from "react";
import "../index.css";
import "./Navbar.css";
import ClockIcon from "../Images/ClockIcon.png";

const Navbar = () => {
    return (

        <div className="navbar navbar-expand-lg align-bottom">
            <span className="navbar-title">
                <img src={ClockIcon} className="Navbar-clockIcon" alt="clock icon" />
                    Is it time to sell?
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto pr-5">
                    <li className="nav-item">
                        <a className="nav-link" href="/">How It Works</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">FAQ</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;