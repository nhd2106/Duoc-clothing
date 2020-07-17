import React from "react";

import "./sign-in.styles.scss";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({email: '', password:''} )

  };
  handleChange = (e) => {
      const { value, name } = e.target;
      this.setState({[name]: value})
      console.log(value,name)
  }


  render() { 
    return <div className="sign-in"> 
        <h2>I already have an account</h2>
        <span>I already have an email and password</span>
     <form onSubmit={this.handleSubmit}>
         <FormInput label="email" handleChange={this.handleChange} type="email" name="email" value={this.state.email} required id=""/>
         <FormInput label="password" handleChange={this.handleChange} type="password" name="password" value={this.state.password} required id=""/>
         <CustomButton  type='submit' >Sign In</CustomButton>
         <CustomButton onClick = {signInWithGoogle} type='submit' >Sign In With Google</CustomButton>
     </form>

    </div>;
  }
}
export default SignIn;
