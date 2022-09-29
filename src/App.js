import React from 'react'
import './App.css'
import {
  BrowserRouter as Router
} from "react-router-dom"
import AnimatedRoutes from './components/pages/AnimatedRoutes'
import ScrollToTop from './components/pages/ScrollToTop';


 
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <AnimatedRoutes/>
      </Router>
    </div>
  );
}

export default App;
