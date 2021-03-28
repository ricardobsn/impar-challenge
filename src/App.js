import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import RegisterNews from './components/RegisterNews'
import WaitingAprovation from './components/WaitingAprovation'
import EditNews from './components/EditNews'
import RejectedNews from './components/RejectedNews'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useStatevalue } from "./StateProvider";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [{ news }, dispatch] = useStatevalue();


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
          <Route path='/edit'>
            <EditNews news={news} />
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
