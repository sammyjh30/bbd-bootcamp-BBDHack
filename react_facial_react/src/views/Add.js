import React, { Component } from "react";
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
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
            <div className="content">
                <h2>Add New User</h2>
                <form>
                    <div id="userInfo">
                        <div className="container">
                            <FormGroup controlId="firstname" bsSize="large">
                                <ControlLabel>First Name</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="text"
                                    placeholder="Enter First Name"
                                    defaultValue={this.state.firstname}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup controlId="lastname" bsSize="large">
                                <ControlLabel>Surname</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="text"
                                    placeholder="Enter Last Name"
                                    defaultValue={this.state.lastname}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup controlId="bbdID" bsSize="large">
                                <ControlLabel>User Domain</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="text"
                                    placeholder="Enter User Domain (bbdnet...)"
                                    defaultValue={this.state.bbdID}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup controlId="position" bsSize="large">
                                <ControlLabel>position</ControlLabel>
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
                    </div>
                    <hr />

                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button
                                bsSize="large"
                                // disabled={!this.validateForm()}
                                onClick={this.saveAndContinue}
                            >
                                Save &amp; Continue
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <hr />
                    {/* <form [formGroup]="formdata" (ngSubmit)="onClickSubmit(formdata.value)"> */}
                    {/* <div id="userInfo">
                        <div className="container">
                            <p>Please fill in this form to create an account.</p>
                            <hr />

                            <label for="firstname"><b>First Name</b></label>
                            <input type="text" placeholder="Enter First Name" formControlName="firstname" required />

                            <label for="lastname"><b>Last Name</b></label>
                            <input type="text" placeholder="Enter Last Name" formControlName="lastname" required />

                            <label for="bbdID"><b>User Domain</b></label>
                            <input type="text" placeholder="Enter User Domain (bbdnet...)" formControlName="bbdID" required />

                            <label for="position"><b>Position</b></label>
                            <input type="text" placeholder="Enter Employee Position" formControlName="position" required />

                        </div>
                    </div>
                    <div id="photoInput">
                    </div> */}
                    {/* <button type="submit" className="registerbtn">Register</button> */}
                </form>
            </div>
        );
    }
}