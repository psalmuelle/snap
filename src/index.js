import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import Header from './header/Header';
import Body from "./Body/Body"

class Snap extends React.Component {
  render(){
    return(
      <>
  <Header/>
  <Body/>
  </>
 
   
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Snap />
  </React.StrictMode>
);

