import React from "react";
import Navbar from './components/Navbar'
import Home from './components/Home';
import Contact from './components/Contact'
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
            {/* <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/adopt" component={Adopt} />
            <Route path="/training" component={Training} />
            <Route path="/behaviour" component={Behaviour} />
            <Route path="/courses" component={Courses} />
            <Route path="/food" component={Food} />
            <Route path="/healthcare" component={Healthcare} />
            <Route path="/ethical-breeding" component={EthicalBreeding} /> */}
            {/* <Route path="/our-team" exact component={Team} /> */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
