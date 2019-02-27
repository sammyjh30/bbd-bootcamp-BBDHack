import React, { Component, forwardRef, useRef, useImperativeHandle } from "react";
import { HelpBlock, ButtonGroup, ButtonToolbar, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Add.css";
import VideoInput from './VideoInput';

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: null,
            lastname: null,
            bbdID: null,
            position: null,
            face_front: null,
            face_left: null,
            face_right: null
        };
        this.child = React.createRef();
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    // triggerChildAlert(){
    //     this.refs.child.callChildMethod();
    //     // to get child parent returned  value-
    //     // this.value = this.refs.child.callChildMethod();
    //     // alert('Returned value- '+this.value);
    // }

    onClick = () => {
        this.child.current.getAlert();
      };

    render() {
        return (
            <div className="content">
                <h2>Add New User</h2>
                <form>
                    <div id="userInfo">
                        <div className="container">
                            <FormGroup controlId="firstname" bsSize="large">
                                <ControlLabel>First Name</ControlLabel><br />
                                <FormControl
                                    autoFocus
                                    type="text"
                                    placeholder="Enter First Name"
                                    defaultValue={this.state.firstname}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup controlId="lastname" bsSize="large">
                                <ControlLabel>Surname</ControlLabel><br />
                                <FormControl
                                    autoFocus
                                    type="text"
                                    placeholder="Enter Last Name"
                                    defaultValue={this.state.lastname}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup controlId="bbdID" bsSize="large">
                                <ControlLabel>User Domain</ControlLabel><br />
                                <FormControl
                                    autoFocus
                                    type="text"
                                    placeholder="Enter User Domain (bbdnet...)"
                                    defaultValue={this.state.bbdID}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup controlId="position" bsSize="large">
                                <ControlLabel>position</ControlLabel><br />
                                <FormControl
                                    autoFocus
                                    type="text"
                                    placeholder="Enter Employee Position"
                                    defaultValue={this.state.position}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div id="photoInput">
                        <div id="video-sample">
                            <VideoInput  ref={this.child}/>
                        </div>
                        <div id="newImages">
                            <div id="front-photo">
                                <ControlLabel>Front View</ControlLabel>
                                {this.state.face_front ? <div id="face-front-box">
                                    <img src={this.state.face_front} />
                                </div>
                                    : <div id="empty-img"></div>}
                                {/* <button type="" className="registerbtn">Register</button> */}
                                <button onClick={this.onClick}>Click</button>
                                {/* <button onClick={() => this.clickChild()}>Click</button> */}
                            </div>
                            <div id="left-photo">
                                <ControlLabel>Left View</ControlLabel><br />

                            </div>
                            <div id="right-photo">
                                <ControlLabel>Right View</ControlLabel><br />

                            </div>
                        </div>
                    </div>
                    <div id="register-button">
                        <hr />
                        <button type="submit" className="registerbtn">Register</button>
                        <hr />
                    </div>
                </form>
            </div>
        );
    }
}