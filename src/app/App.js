import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Crypto, Exchanges, Home, Navbar, News } from '../components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          {/* <Home /> */}

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cryptocurrencies">
              <Crypto />
            </Route>
            <Route path="/exchanges">
              <Exchanges />
            </Route>
            <Route path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: 'white', textAlign: 'center' }}
        >
          Copyright © 2021
          <Link to="/">Cryptoverse Inc.</Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
