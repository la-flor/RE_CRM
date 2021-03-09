import React from "react";
import Navbar from "./Navbar";
import "./HomePage.css";
import GetOfferForm from "./GetOfferForm";

const HomePage = () => {
    return (
        <div className="HomePage">
            <h1 className="HomePage-title">Is it time to sell?</h1>
            <Navbar />
            <GetOfferForm />
            <div className="HomePage-infobar">
                <span className="HomePage-infobar-text">
                We buy homes in all conditions quickly without
                <br />
                all of the hassels of putting it on the market
                </span>
            </div>
        </div>
    )
}

export default HomePage;