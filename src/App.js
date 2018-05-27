import React, { Component, StyleSheet, TextField } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Layout, List, ListItem,ListItemContent, ListItemAction, Icon, Header, Navigation, Drawer, Content, Textfield} from 'react-mdl';
import Main from './components/main';
import {Link, Route} from 'react-router-dom';
import About from './components/about';
import PaperPanel from './components/paperpanel';
import StatusPanel from './components/statusPanel';
import LandingPaage from './components/landingpage';


 class App extends Component {
  render() {
    return (
      <div style={{height: '800px', position: 'relative'}}>
    
      <Layout fixedHeader fixedDrawer>
          <Header className="header-color" title="SafeNet AT KeySecure">
              <Textfield
                  value=""
                  onChange={() => {}}
                  label="Search"
                  expandable
                  expandableIcon="search"
              />
          </Header>
          <Drawer title="Menu">
                  <Navigation>
                      <Link to="/">Landing Page</Link>
                      <Link to="/Status">Status Page</Link>
                      <Link to="/">Link</Link>
                      <About/>                  
                  </Navigation>
              </Drawer>
              <Content>
                <div className="page-content"/>
                <Route path="/" exact component={LandingPaage}/>
                <Route path="/Status" exact component={StatusPanel}/>
                
                {/* <StatusPanel/>             */}
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
