import React from "react";
import "./secondBody.css";
import HeroImageDesktop from "../../images/image-hero-desktop.png";
import HeroImageMobile from "../../images/image-hero-mobile.png";

export default function SecondBody () {
    return(
        <div className="hero-image">
            <img  className="desktop-hero" src={HeroImageDesktop} alt="Hero image" />
            <img className="mobile-hero" src={HeroImageMobile} alt="Hero image" />
        </div>
    )
}