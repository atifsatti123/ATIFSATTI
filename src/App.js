import logo from './logo.svg';
import './App.css';
import About from  './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
