import React, { Component } from 'react';
import "./Home.css";
import VideoInput from './VideoInput';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenValue: "Press button to scan...",
      scanStart: false,
      label: null,
      userInfo: null
    };
  }

  scanFace(e) {
    e.preventDefault();
    this.setState({ screenValue: "Scanning..." });
    this.setState({ scanStart: true });
  }
  getUserByName = (name) => {
    // console.log("Adding User matches")
    // Get Matches
    try {
      fetch('/getUserByName/' + name, {
        // method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then(response => response.json())
        .then((responseJSON) => {
          console.log("JSON ID test = ");
          console.info(responseJSON);
          this.setState({userInfo: responseJSON[0]});
          console.log(responseJSON[0])
          // this.setState({ userMatches: responseJSON });
          // console.log("APP Matches = " + JSON.stringify(this.state.userMatches));
        })
        .catch(err => console.error(err))
    } catch (e) {
      alert(e.message);
    }
  }
  setLabel = (name) => {
    console.log("Incoming name: " + name);
    console.log("Current State:");
    console.info(this.state);
    if (this.state.scanStart == true && name != null && this.state.label == null) {
      console.log("We are scanning");
      this.setState({ label: name });
      // this.setState({ scanStart: false });
      if (name == "unknown") {
        this.setState({ screenValue: "Sorry I don't recognise you :(" });
      } else {
        this.setState({ screenValue: "Hi " + name });
        this.getUserByName(name);
      }
    }
    // if (this.state.scanStart == true && this.state.label === null && name !== null){
    // // if (name != null && this.state.label == null) {
    //   console.log("NAME: " + name);
    //   this.setState({label: name});
    // }    
  }

  render() {
    return (
      <div>
        <div className="content">
          <div id="imageScan">
            {this.state.scanStart === true ? <VideoInput label={this.state.label} setLabel={this.setLabel} /> : null}
            <div id="userInfoList">
            <br/><br/><br/><br/>
            {this.state.userInfo && this.state.userInfo.firstName && this.state.userInfo.lastName && this.state.userInfo.userID && this.state.userInfo.position? <div>
                                                                      <p><strong>First Name:</strong> {this.state.userInfo.firstName}</p>
                                                                      <p><strong>Last Name:</strong> {this.state.userInfo.lastName}</p>
                                                                      <p><strong>User Domain:</strong> bbdnet{this.state.userInfo.userID}</p>
                                                                      <p><strong>Postion:</strong> {this.state.userInfo.position}</p>
                                                                    </div>
            : null}
            </div>
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