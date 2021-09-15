import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Tasks from './Pages/Tasks';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/tasks">TASKS</Link>
      </nav>
        <Switch>
          <Route path="/tasks"><Tasks /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/"><Home /></Route>
        </Switch>

    </div>
      </BrowserRouter>
  );
}

export default App;
