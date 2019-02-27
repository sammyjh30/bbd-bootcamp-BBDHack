import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
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
            face_right: null,
            getImage: false
        };
        this.child = React.createRef();
        this.changePic = this.changePic.bind(this);
        this.submitInfo = this.submitInfo.bind(this);
    }
    submitInfo(e) {
        e.preventDefault();
        console.log("New information:");
        console.info(this.state);
        //Call IMG scanner to get desriptors
        //Send through to database
    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    onImageClick = (e) => {
        e.preventDefault();
        this.child.current.getAlert(e.currentTarget.getAttribute('data-column'));
    };

    changePic(side, img) {
        console.log("side= " + side + "     img= " + img);
        // console.log(this.state.lastname);
        if (img != null && side != null) {
            if (side == "front") {
                console.log("Entered front");
                this.setState({ face_front: img });
            } else if (side == "left") {
                this.setState({ face_left: img });
            } else if (side == "right") {
                this.setState({ face_right: img });
            }

        }
    }

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
                            <VideoInput ref={this.child} changePic={this.changePic} />
                        </div>
                        <div id="newImages">
                            <div id="front-photo">
                                <ControlLabel>Front View</ControlLabel><br/>
                                <button value="front" data-column="front" onClick={this.onImageClick}>Update Front</button>
                                {this.state.face_front ? <div id="face-front-box">
                                    <img src={this.state.face_front} />
                                </div>
                                    : <div id="empty-img"></div>}
                            </div>
                            <div id="left-photo">
                                <ControlLabel>Left View</ControlLabel><br />
                                <button value="left" data-column="left" onClick={this.onImageClick}>Update Left</button>
                                {this.state.face_left ? <div id="face-front-box">
                                    <img src={this.state.face_left} />
                                </div>
                                    : <div id="empty-img"></div>}
                            </div>
                            <div id="right-photo">
                                <ControlLabel>Right View</ControlLabel><br />
                                <button value="right" data-column="right" onClick={this.onImageClick}>Update Right</button>
                                {this.state.face_right ? <div id="face-front-box">
                                    <img src={this.state.face_right} />
                                </div>
                                    : <div id="empty-img"></div>}
                            </div>
                        </div>
                    </div>
                    <div id="register-button">
                        <hr />
                        <button type="submit" className="registerbtn" onClick={this.submitInfo}>Register</button>
                        <hr />
                    </div>
                </form>
            </div>
        );
    }
}