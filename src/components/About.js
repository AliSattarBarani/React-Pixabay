import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <center>
        <div>
          <div className="AboutContainer">
            <h4 style={{ borderBottom: "1.2px dashed #333", width: "100px" }}>
              About Me:
            </h4>
            <p className="AboutMe">
              Hello guys, my name is Ali Sattar Barani, If you want to hire me
              then try to contact with me through{" "}
              <b>
                <a
                  href="https://www.facebook.com/AliSattarBarani"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "blue",
                    paddingRight: "4px",
                  }}
                >
                  Facebook
                </a>
              </b>
              and
              <b>
                <a
                  href="https://www.instagram.com/ali_sattar_barani/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "red",
                    paddingLeft: "4px",
                  }}
                >
                  Instagram
                </a>
              </b>
              .
            </p>
          </div>
          <div className="SkillsContainer">
            <h4 style={{ borderBottom: "1.2px dashed #333", width: "120px" }}>
              What i know?
            </h4>
            <p style={{ textAlign: "left", paddingLeft: "5px" }}>
              I know the following:
            </p>
            <ol style={{ textAlign: "left" }}>
              <li className="skilllabel" key="HTML">
                HTML
              </li>
              <li className="skilllabel" key="CSS">
                CSS
              </li>
              <li className="skilllabel" key="JS">
                JavaScript
              </li>
              <li className="skilllabel" key="React.js">
                React.js
              </li>
              <li className="skilllabel" key="MUI">
                Material UI
              </li>
              <li className="skilllabel" key="MCSS">
                Materialize.css
              </li>
              <li className="skilllabel" key="Bootstrap">
                Bootstrap
              </li>
              <li className="skilllabel" key="Python">
                Python
              </li>
              <li className="skilllabel" key="Django">
                Django
              </li>
              <li className="skilllabel" key="MySQL">
                MySQL
              </li>
              <li className="skilllabel" key="Sqlite">
                Sqlite
              </li>
              <li className="skilllabel" key="Firebase">
                Firebase
              </li>
              <li className="skilllabel" key="RethinkDB">
                RethinkDB
              </li>
            </ol>
          </div>
        </div>
      </center>
    );
  }
}
