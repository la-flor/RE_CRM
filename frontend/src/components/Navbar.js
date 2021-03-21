import React from "react";
import "../index.css";
import "./Navbar.css";
import clockIcon from "../images/ClockIcon.png";

const Navbar = () => {
    return (

        <div className="navbar navbar-expand-lg align-bottom">
            <span className="navbar-title">
                <img src={clockIcon} class="d-inline-block" alt="clock icon" />
                    Is it time to sell?
            </span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto pr-5">
                    <li className="nav-item">
                        <a class="nav-link" href="#">How It Works</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">FAQ</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}


{/* <span>
How It Works
</span>
<span>
FAQ
</span> */}

export default Navbar;