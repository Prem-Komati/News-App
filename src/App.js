import './App.css';
import React, { useState } from 'react';
import Navbar from "./components/Navbar"
import News from './components/News';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {

  const pageSize = 5
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress,setProgress] = useState(0)

    return (
      <div>
      <Router>
     
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>

          <Route exact path="/technology" element = {<News setProgress={setProgress} apiKey={apiKey} key="Technology" pageSize={5} country="in" category='Technology'/>}/>
          <Route exact path="/business" element = {<News setProgress={setProgress} apiKey={apiKey} key="Business" pageSize={5} country="in" category='Business'/>}/>
          <Route exact path="/entertainment" element = {<News setProgress={setProgress} apiKey={apiKey} key="Entertainment" pageSize={5} country="in" category='Entertainment'/>}/>
          <Route exact path="/general" element = {<News setProgress={setProgress} apiKey={apiKey} key="General" pageSize={5} country="in" category='General'/>}/>
          <Route exact path="/health" element = {<News setProgress={setProgress} apiKey={apiKey} key="Health" pageSize={5} country="in" category='Health'/>}/>
          <Route exact path="/sports" element = {<News setProgress={setProgress} apiKey={apiKey} key="Sports" pageSize={5} country="in" category='Sports'/>}/>
          <Route exact path="/science" element = {<News setProgress={setProgress} apiKey={apiKey} key="Science" pageSize={5} country="in" category='Science'/>}/>
          </Routes>
        </Router>
      </div>
    )
  
}

export default App;