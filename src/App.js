import './App.css';
import Header from './comps/Header'
import Home from './comps/Home'
import RegisterNews from './comps/RegisterNews'
import WaitingAprovation from './comps/WaitingAprovation'
import RejectedNews from './comps/RejectedNews'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/cadastro'>
            <RegisterNews />
          </Route>
          <Route path='/aprovacao'>
            <WaitingAprovation />
          </Route>
          <Route path='/rejeitadas'>
            <RejectedNews />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


//2:18
//7:10