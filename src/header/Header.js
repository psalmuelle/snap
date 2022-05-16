import React from "react";
import "./header.css";
import Logo from "../images/logo.svg";
import ArrowDown from "../images/icon-arrow-down.svg";
import NavIcon from "../images/icon-menu.svg";
import ArrowUp from "../images/icon-arrow-up.svg";
import IconTodo from "../images/icon-todo.svg";
import IconCalendar from "../images/icon-calendar.svg";
import IconReminder from "../images/icon-reminders.svg";
import IconPlanning from "../images/icon-planning.svg";
import CloseMenu from "../images/icon-close-menu.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenOne: false,
      isOpenTwo: false,
      isOpenThree: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.togglingFirst = this.togglingFirst.bind(this);
    this.togglingSecond = this.togglingSecond.bind(this);
    this.togglingThird = this.togglingThird.bind(this);
  }

  togglingFirst() {
    if (!this.state.isOpenOne) {
      this.setState({ isOpenOne: true });
    } else {
      this.setState({ isOpenOne: false });
    }
  }
  togglingSecond() {
    if (!this.state.isOpenTwo) {
      this.setState({ isOpenTwo: true });
    } else {
      this.setState({ isOpenTwo: false });
    }
  }
  togglingThird() {
    if (!this.state.isOpenThree) {
      this.setState({ isOpenThree: true });
    } else {
      this.setState({ isOpenThree: false });
    }
  }

  handleClick() {}

  render() {
    return (
      <nav>
        <div className='first--nav'>
          <div className='logo'>
            <img src={Logo} alt='logo' />
          </div>

          <ul>
            <li >
              <div onClick={this.togglingFirst} className= "mouse-effect">
              Features{" "}
              <img
                src={this.state.isOpenOne ? ArrowUp : ArrowDown}
                alt='arrow'
              />
              </div>
              {this.state.isOpenOne && (
                <div className='tag one'>
                  <div className='dropdown'>
                    {" "}
                    <img alt="to do icon" src={IconTodo} /> <li>Todo List</li>
                  </div>

                  <div className='dropdown'>
                    {" "}
                    <img alt="calender icon" src={IconCalendar} /> <li>Calendar</li>
                  </div>

                  <div className='dropdown'>
                    {" "}
                    <img alt="reminder icon" src={IconReminder} /> <li>Reminders</li>
                  </div>

                  <div className='dropdown'>
                    {" "}
                    <img alt="icon planning" src={IconPlanning} /> <li>Planning</li>
                  </div>
                </div>
              )}
            </li>

            <li >
              <div onClick={this.togglingSecond} className= "mouse-effect">
              Company{" "}
              <img
                src={this.state.isOpenTwo ? ArrowUp : ArrowDown}
                alt='arrow'
              /></div>
              {this.state.isOpenTwo && (
                <div className='tag'>
                  <li className='dropdown'>History</li>
                  <li className='dropdown'>Our Team</li>
                  <li className='dropdown'>Blog</li>
                </div>
              )}
            </li>
            <li className="mouse-effect">Careers</li>
            <li className="mouse-effect">About</li>
          </ul>
        </div>

        <div className='second--nav'>
          <p className="mouse-effect">Login</p>
          <button className="mouse-btn">Register</button>
        </div>
          
          
        <div className='nav--icon' onClick={this.togglingThird}>
         {!this.state.isOpenThree && (<img
            src={ NavIcon}
            alt='navigation icon'
          />)}
        </div>
        {this.state.isOpenThree && (
          <div className='mobile-menu'>
            <div className="nav-section">
              <div  className="close-button" onClick={this.togglingThird}>
              <img src={CloseMenu} alt="close menu"/>
                </div>
              
              <ul className="options">
              <li >
                <div onClick={this.togglingFirst} className="opt">
         
              Features{" "}
              <img
                src={this.state.isOpenOne ? ArrowUp : ArrowDown}
                alt='arrow'
              /></div>
              {this.state.isOpenOne && (
                <div className='tag tag-mobile'>
                  <div className='dropdown dropdown-mobile'>
                    {" "}
                    <img alt="to do icon" src={IconTodo} /> <li>Todo List</li>
                  </div>

                  <div className='dropdown'>
                    {" "}
                    <img alt="icon calender" src={IconCalendar} /> <li>Calendar</li>
                  </div>

                  <div className='dropdown'>
                    {" "}
                    <img alt="icon reminder" src={IconReminder} /> <li>Reminders</li>
                  </div>

                  <div className='dropdown'>
                    {" "}
                    <img alt="icon planning" src={IconPlanning} /> <li>Planning</li>
                  </div>
                </div>
              )}
            </li>


            <li >
              <div onClick={this.togglingSecond} className= "opt">
              Company{" "}
              <img
                src={this.state.isOpenTwo ? ArrowUp : ArrowDown}
                alt='arrow'
              /></div> 
              {this.state.isOpenTwo && (
                <div className='tag  tag-mobile'>
                  <li className='dropdown dropdown-mobile'>History</li>
                  <li className='dropdown dropdown-mobile'>Our Team</li>
                  <li className='dropdown  dropdown-mobile'>Blog</li>
                </div>
              )}
            </li>
            <li>Careers</li>
            <li>About</li>

              </ul>
              <div className='second--nav second--nav-mobile'>
          <p>Login</p>
          <button>Register</button>
        </div>
            </div>
          </div>
        )}
      </nav>
    );
  }
}

export default Header;
