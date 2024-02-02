import React from "react";
import "./css/SideBar.css";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <a href=""> </a>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <Link to="/HomePage">Acceuil</Link>
            </a>
          </li>

          <li>
            <a href="#">
              <Link to="/AboutPage">A propos</Link>
            </a>
          </li>

          <li>
            <a href="#">
              <Link to="/OeuvresPage">Oeuvres</Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
