import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './views/Home';
import ImageInput from './views/ImageInput';
import VideoInput from './views/VideoInput';
import Add from './views/Add';

export default ({childProps}) =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/photo" component={ImageInput} />
        <Route exact path="/camera" component={VideoInput} />
        <Route exact path="/add" component={Add} props={childProps} />
    </Switch>;