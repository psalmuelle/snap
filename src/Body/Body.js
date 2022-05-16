import React from "react";
import "./body.css";
import FirstBody from "./FirstBody/FirstBody";
import SecondBody from "./SecondBody/SecondBody";


export default function Body () {
    return(
       <main>
          <SecondBody/>
          <FirstBody/> 
       </main>
    )
}