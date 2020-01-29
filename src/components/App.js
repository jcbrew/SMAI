import React, { Component } from 'react';
//import Header from './Header';

import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Intro from './Intro';
import Adult from './Adult';
import Children from './Children';
import History from './History';
import Masters from './Masters';
import Contact from './Contact';
import Newsletter from './Newsletter';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends Component {

    render() {
        return (
            <div>
                <Router history={createBrowserHistory()}>
                    {/* <Header /> */}
                    <Switch>
                        {/*<Route exact path='/' component={App} />*/}
                        <Route exact path='/' component={Intro} />
                        <Route path='/Adult' component={Adult} />
                        <Route path='/Children' component={Children} />
                        <Route path='/History' component={History} />
                        <Route path='/Masters' component={Masters} />
                        <Route path='/Contact' component={Contact} />
                        <Route path='/Newsletter' component={Newsletter} />
                    </Switch>
                </Router>


            </div>
        );
    }
}

export default App;