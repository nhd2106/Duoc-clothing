import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";

import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./components/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signIn-and-signUp/signIn-and-signUp.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      currentUser: null,

    }
  }
  unSubcribeFromAuth = null;
  componentDidMount() {
   this.unSubcribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
      console.log(user);
    });
    
  }

  componentWillUnmount(){
    this.unSubcribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/sign-in"
            component={SignInAndSignUpPage}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
