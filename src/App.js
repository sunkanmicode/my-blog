import Topbar from "./topbar/Topbar";
import Home from './page/home/Home'
import Single from "./page/single/Single";
import Write from "./page/write/Write";
import Setting from "./page/settings/Setting";
import Login from "./page/login/Login";
import Register from './page/register/Register'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const { user } = useContext(Context);
  return (
    <Router>
        <Topbar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/register'>{user? <Home /> : <Register />}</Route>
        <Route path='/login'>{user? <Home /> : <Login />}</Route>
        <Route path='/write'>{user? <Write /> : <Register />}</Route>
        <Route path='/setting'>{user? <Setting /> : <Register />}</Route>
        <Route path='/post/:postId'><Single /></Route>
      </Switch> 
    </Router>
    );
  
}

export default App;
