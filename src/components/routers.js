import React, {Component} from 'react'
import {HashRouter, Route, IndexRoute} from 'react-router-dom'
// import { Route, Redirect,IndexRouter} from 'react-router' import { Route}
// from 'react-router'
import Job from './container/Job/jobWanted'
import App from './Main';
import HeadDtail from './header/HeadDtail';
// import Daily from './container/Daily/Daily' import Container from
// './container/Container' const history = createHistory() const location =
// history.location

export default class Routes extends Component {
    render() {
        return (
            <HashRouter >
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/HeadDtail" component={HeadDtail}/> {/* <Route path="/container" component={Container}>
                        <div>
                            <IndexRoute path="/Container/:containerName" component={Job}/>
                            <Route path="/Container/:containerName" component={Daily} />
                            {this.props.children}
                        </div>
                    </Route> */}
                    {/* {location.hash === '#/' ? <Redirect to='/App' /> : ''} */}

                </div>
            </HashRouter >
        )
    }

}

// const Routers=(     <Router>     <div>     <Route path="/"
// component={AppComponent} />     <IndexRoute path="/job" component={Job} />
// <Route path="/HeadDtail" component={HeadDtail} />     {location.hash === '#/'
// ? <Redirect to='/login' /> : ''}     </div> </Router> ) export default
// Routers