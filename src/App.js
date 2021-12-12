import React from "react";
import Navbar from './components/Navbar'
import Home from './components/Home';
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="boxed">
      <Router>
        {/* <ScrollToTop /> */}
        <Navbar />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services} />
            <Route path="/about-us" component={About} />
            {/* <Route path="/contact" component={Contact} /> */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
