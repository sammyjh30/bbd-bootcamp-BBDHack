
// import React, { Component, Fragment } from 'react';
// import { Route, Router, Link, Redirect } from 'react-router-dom';
// import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
// // import { LinkContainer } from "react-router-bootstrap";

// import createHistory from 'history/createBrowserHistory';
// import './App.css';
// import Routes from "./Routes";


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div>
//         <Navbar fluid collapseOnSelect>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <Link to="/">Scratch</Link>
//           </Navbar.Brand>
//           <Navbar.Toggle />
//         </Navbar.Header>
//       </Navbar>
//       <Routes />
//         {/* <Router history={createHistory()}>
//             <div className="route">
//               <Route exact path="/" component={Home} />
//               <Route exact path="/photo" component={ImageInput} />
//               <Route exact path="/camera" component={VideoInput} />
//             </div> */}
//           {/* <nav class="header"> */}
//             {/* <h1 routerLink="/home">Demo</h1> */}
//           {/* <h1><Link to="/home">Demo</Link></h1> */}
//             {/* <h1> routerLink="/home">Demo</h1> */}
//             {/* <img src="../assets/plus.png" id="plus" */}
//               {/* title="Add New User" alt="Link to add a new user to the database" */}
//               {/* routerLink="/add" /> */}
//           {/* </nav> */}
//           {/* </Router> */}

//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";

class App extends Component {
  getUserImages() {
    //Make database call
    //put info into file (Chanel)
  }

  addUser(e, newUser) {
    e.preventDefault();
    //Add user to database
    //Call the re-reading of file
    this.getUserImages();
  }

  getUsers = () => {
    console.log("Getting Users")
    try {
      fetch('/getAllUsers', {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then(response => response.json())
        .then((responseJSON) => {
          // console.log("JSON users test = ");
          // console.info(responseJSON);
          // this.setState({ userMatches: responseJSON });
          // console.log("APP Matches = " + JSON.stringify(this.state.userMatches));
        })
        .catch(err => console.error(err))
    } catch (e) {
      alert(e.message);
    }
  }

  // getUserByName = (name) => {
  //   // console.log("Adding User matches")
  //   // Get Matches
  //   try {
  //     fetch('/getUserByName' + id, {
  //       // method: "GET",
  //       headers: {
  //         "Content-Type": "application/json; charset=utf-8",
  //       },
  //       body: JSON.stringify({
  //         name: name
  //       })
  //     })
  //       .then(response => response.json())
  //       .then((responseJSON) => {
  //         console.log("JSON ID test = ");
  //         console.info(responseJSON);
  //         // this.setState({ userMatches: responseJSON });
  //         // console.log("APP Matches = " + JSON.stringify(this.state.userMatches));
  //       })
  //       .catch(err => console.error(err))
  //   } catch (e) {
  //     alert(e.message);
  //   }
  // }

  componentWillMount() {
    this.getUserImages();
    // this.getUsers();
  }

  render() {

    const childProps = {
      addUser: this.addUser
    };
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Demo</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem href="/add">Add</NavItem>
              <NavItem href="/photo">Photo</NavItem>
              <NavItem href="/camera">Camera</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;