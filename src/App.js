import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import Cart from './components/cart/cart'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Item from './components/items/items';
import SingleItem from './components/singleitem/singleitem';
import Login from './components/login&sign up/login';
import SignIn from './components/login&sign up/signIn';
import store from './redux/store';
import {Provider} from 'react-redux'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
   <Router>
    <Switch>
    <Route exact path='/'><Login/></Route>
    <Route path='/signin'><SignIn/></Route>
      <Route path='/home'><Home/></Route>
      <Route path='/cart'><Cart/></Route>
      <Route path='/items'><Item/></Route>
      <Route path='/singleItem'><SingleItem/></Route>
    </Switch>
   </Router>
   </Provider>
    </div>
  );
}

export default App;
