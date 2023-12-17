import './App.css';

import React, { Component,useRef } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
 import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';

export default class App extends Component {
  pageSize = 15;

  state = {
    progress:0
  }
  // const ref = useRef(null)

  setProgress = (progress)=>{
    this.setState({progress:progress})

  }
  render() {
    return (
      <Router>
        <div>
        <NavBar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
      />
           
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
            
            <Route path="/Business" element={<News setProgress={this.setProgress }  key="Business" pageSize={this.pageSize} country="in" category="Business" />} />
            <Route path="/Entertainment" element={<News setProgress={this.setProgress }  key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />} />
            <Route path="/General" element={<News setProgress={this.setProgress }  key="General" pageSize={this.pageSize} country="in" category="General" />} />
            <Route path="/Health" element={<News setProgress={this.setProgress }  key="Health" pageSize={this.pageSize} country="in" category="Health" />} />
            <Route path="/Science" element={<News setProgress={this.setProgress }  key="Science" pageSize={this.pageSize} country="in" category="Science" />} />
            <Route path="/Sports" element={<News setProgress={this.setProgress }  key="Sports" pageSize={this.pageSize} country="in" category="Sports" />} />
            <Route path="/Technology" element={<News setProgress={this.setProgress }  key="Technology" pageSize={this.pageSize} country="in" category="Technology" />} />
            <Route path="/Science" element={<News setProgress={this.setProgress }  key="Science" pageSize={this.pageSize} country="in" category="Science" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

