import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      collapseMenu: false,
      activePath: window.location.pathname,
    };
  }

  handleCollapseMenu = () => {
    this.setState({ collapseMenu: !this.state.collapseMenu });
  };

  highlightActiveSelection = () => {
    this.setState({ activePath: window.location.pathname });
  };

  render() {
    return (
      <div
        className={
          this.state.collapseMenu
            ? "flex-container-sidebar-collapse"
            : "flex-container-sidebar"
        }
      >
        <ul className="sidebar-list">
          <li className="item" onClick={this.handleCollapseMenu}>
            <div id="icon"></div>
          </li>
          <Link to="/">
            <li
              className="item"
              onClick={this.highlightActiveSelection}
              id={window.location.pathname === "/" ? "active" : ""}
            >
              <div id="icon"></div>
              <div id={this.state.collapseMenu ? "hide-title" : "title"}>
                Inicio
              </div>
            </li>
          </Link>
          <Link to="/zacate">
            <li
              className="item"
              onClick={this.highlightActiveSelection}
              id={window.location.pathname === "/zacate" ? "active" : ""}
            >
              <div id="icon"></div>
              <div id={this.state.collapseMenu ? "hide-title" : "title"}>
                Zacate
              </div>
            </li>
          </Link>
          <Link to="/cactus">
            <li
              className="item"
              onClick={this.highlightActiveSelection}
              id={window.location.pathname === "/cactus" ? "active" : ""}
            >
              <div id="icon"></div>
              <div id={this.state.collapseMenu ? "hide-title" : "title"}>
                Cactus
              </div>
            </li>
          </Link>
          <Link to="/hiervabuena">
            <li
              className="item"
              onClick={this.highlightActiveSelection}
              id={window.location.pathname === "/hiervabuena" ? "active" : ""}
            >
              <div id="icon"></div>
              <div id={this.state.collapseMenu ? "hide-title" : "title"}>
                Hiervabuena
              </div>
            </li>
          </Link>
          <Link to="/limon">
            <li
              className="item"
              onClick={this.highlightActiveSelection}
              id={window.location.pathname === "/limón" ? "active" : ""}
            >
              <div id="icon"></div>
              <div id={this.state.collapseMenu ? "hide-title" : "title"}>
                Limon
              </div>
            </li>
          </Link>
          <Link to="/flor">
            <li
              className="item"
              onClick={this.highlightActiveSelection}
              id={window.location.pathname === "/flor" ? "active" : ""}
            >
              <div id="icon"></div>
              <div id={this.state.collapseMenu ? "hide-title" : "title"}>
                Flor
              </div>
            </li>
          </Link>
          <Link to="/arbol">
            <li
              className="item"
              onClick={this.highlightActiveSelection}
              id={window.location.pathname === "/arbol" ? "active" : ""}
            >
              <div id="icon"></div>
              <div id={this.state.collapseMenu ? "hide-title" : "title"}>
                Arbol
              </div>
            </li>
          </Link>
          <Link to="/gerbera">
            <li
              className="item"
              onClick={this.highlightActiveSelection}
              id={window.location.pathname === "/gerbera" ? "active" : ""}
            >
              <div id="icon"></div>
              <div id={this.state.collapseMenu ? "hide-title" : "title"}>
                Gerbera
              </div>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
