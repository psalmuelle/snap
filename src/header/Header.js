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
            <li onClick={this.togglingFirst}>
              Features{" "}
              <img
                src={this.state.isOpenOne ? ArrowUp : ArrowDown}
                alt='arrow-down'
              />
              {this.state.isOpenOne && (
                <div className='tag one'>
                  <div className='dropdown'>
                    {" "}
                    <img src={IconTodo} /> <li>Todo List</li>
                  </div>

                  <div className='dropdown'>
                    {" "}
                    <img src={IconCalendar} /> <li>Calendar</li>
                  </div>

                  <div className='dropdown'>
                    {" "}
                    <img src={IconReminder} /> <li>Reminders</li>
                  </div>

                  <div className='dropdown'>
                    {" "}
                    <img src={IconPlanning} /> <li>Planning</li>
                  </div>
                </div>
              )}
            </li>

            <li onClick={this.togglingSecond}>
              Company{" "}
              <img
                src={this.state.isOpenTwo ? ArrowUp : ArrowDown}
                alt='arrow-down'
              />
              {this.state.isOpenTwo && (
                <div className='tag'>
                  <li className='dropdown'>History</li>
                  <li className='dropdown'>Our Team</li>
                  <li className='dropdown'>Blog</li>
                </div>
              )}
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>

        <div className='second--nav'>
          <p>Login</p>
          <button>Register</button>
        </div>

        <div className='nav--icon' onClick={this.togglingThird}>
          <img
            src={this.state.isOpenThree ? CloseMenu: NavIcon}
            alt='nav-icon'
          />
        </div>
        {this.state.isOpenThree && (
          <div className='mobile-menu'>
            <div>
              <div>
                
              </div>
            </div>
          </div>
        )}
      </nav>
    );
  }
}

export default Header;
