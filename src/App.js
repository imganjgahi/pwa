import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Library from './Pages/Library';
import NotFoundPage from './Pages/Notfound';
import Tasks from './Pages/Tasks';

function App() {
  return (
      <HashRouter>
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">ABOUT</Link>
        <Link to="tasks">TASKS</Link>
        <Link to="Library">Library</Link>
      </nav>
        <Switch>
          <Route path="/Library" ><Library /></Route>
          <Route path="/tasks"><Tasks /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/" exact><Home /></Route>
          <Route path="*" ><NotFoundPage /></Route>
        </Switch>

    </div>
      </HashRouter>
  );
}

export default App;
