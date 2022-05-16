import React from "react";
import "./firstBody.css";
import Databiz from "../../images/client-databiz.svg";
import Audio from "../../images/client-audiophile.svg";
import Meet from "../../images/client-meet.svg";
import Maker from "../../images/client-maker.svg";


export default function FirstBody () {
    return(
        <div className="first-body">
        <h1>Make remote work</h1>
        <p className="info">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <button className="learn-more  mouse-btn">Learn more</button>
        <div className="companies">
            <img src={Databiz} alt="databiz" />
            <img src={Audio} alt="Audio" />
            <img src={Meet} alt="Meet" />
            <img src={Maker} alt="Maker" />
        </div>
        </div>
    )
}