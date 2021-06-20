import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UserList from './components/UserList';
import AddUser from './components/AddUser';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          EmployeeManagement
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">

            <Link to={"/user/add"} className="nav-link">
              Add User
            </Link>
          </li>
        </div>
      </nav>
      <div className="container-fluid mt3">
        <div className="row">
          <Switch>
            <Route exact path={["/", "/user"]} component={UserList} />
            <Route exact path="/user/add" component={AddUser} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
