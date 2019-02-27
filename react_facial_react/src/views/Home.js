import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import VideoInput from './VideoInput';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenValue: "Press button to scan...",
      scanStart: false,
      label: null
    };
  }

  scanFace(e) {
    e.preventDefault();
    this.setState({screenValue: "Scanning..."});
    this.setState({scanStart: true});
  }

  setLabel(name) {
    console.log("NAME: " + name);
    if (name) {
      this.setState({label: name});
    }
    
  }

  render() {
    return (
      <div>
        <div className="content">
          <div id="imageScan">
            {this.state.scanStart === true ? <VideoInput label={this.state.label} setLabel={this.setLabel}/> : null}
          </div>
          <div id="vendingMachine">
            <div id="vendingBackground">
              <div id="cameraBase">
                <div id="cameraLense">
                  <div id="cameraShine"></div>
                </div>
              </div>
              <button id="scanButton" onClick={(e) => this.scanFace(e)}></button>
            <br />
            <div id="screenBase">
              <div id="inputScreen">{this.state.screenValue}</div>
            </div>
          </div>
        </div>
      </div>
      </div >


    );
  }
}