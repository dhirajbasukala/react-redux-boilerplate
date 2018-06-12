import React, { Component } from "react";
import { connect } from "react-redux";
import {  Link, Switch, Route , withRouter } from "react-router-dom";
// app styles
import './style.scss';

import Home from "../Home";
import Page from "../Page";

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
  render() {
    return (
      <div
        style={{ minHeight:'100vh'}}
      >
        <header className="header">
          <Link to="/" className="logo"><h1>Project A</h1></Link>
          <nav
            style={{ marginTop: '20px', marginLeft: '50px', lineHeight: '30px', float: 'left' }}
          >
            <Link to="/">Home</Link>
            <Link to="/sample-page">Sample Page</Link>
          </nav>
        </header>
        <div>
          <main style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/sample-page" component={Page} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});


const App = withRouter(connect(mapStateToProps)(AppComponent));
export default App;
