import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'
import SignUpPage from './Forms/SignUpPage';
import SignInPage from './Forms/SignInPage';
import {Formik} from "formik";
import Dashboard from './Dashboard';
import SearchField from "react-search-field";
import MyTable from "./MyTable";
import StockTable from "./StockTable"
import OverviewTable from "./OverviewTable"
import Portfolio from "./Portfolio"
import SearchBuy from './SearchBuy';
import SearchSell from './SearchSell';

function App() {

  return (
    <Router basename="/react-auth-ui/">
      <div className="App">

      <div className="App__Form">
       <div className="FormTitle">
         <label className="LeftTitle">Fantasy Investment</label>
       </div>
        <Route exact path="/">
        <div className="FormTitle">
          <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
        </div>
        <div className="FormCenter">
            <Formik
            initialValues={{ firstName: "",lastName:"", email: "", password: ""}}
            onSubmit={data => {
              console.log(data);
            }}
            >
            {({values, handleChange, handleBlur, handleSubmit}) => (
              <form onSubmit={handleSubmit}>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="Name">First Name</label>
                <input name="firstName" value={values.firstName} onChange={handleChange} type="firstName" id="firstName" className="FormField__Input" placeholder="Enter your first name" />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="Name">Last Name</label>
                <input name="lastName" value={values.lastName} onChange={handleChange} type="lastName" id="lastName" className="FormField__Input" placeholder="Enter your last name" />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input name="email" value={values.email} onChange={handleChange} type="email" id="email" className="FormField__Input" placeholder="Enter your email" />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input name="password" value={values.password} onChange={handleChange} type="password" id="password" className="FormField__Input" placeholder="Enter your password"  />
              </div>
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>
              <div className="FormField">
                  <button type="submit" className="FormField__Button mr-20">Sign Up</button>
              </div>
              </form>
            )}
            </Formik>
        </div>
        </Route>
        <Route path="/sign-in">
        <div className="FormTitle">
          <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
        </div>
        <Formik
        initialValues={{ email: "", password: ""}}
        onSubmit={data => {
          console.log(data);
        }}
        >
        {({values, handleChange, handleBlur, handleSubmit}) => (
          <form onSubmit={handleSubmit}>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input name="email" value={values.email} onChange={handleChange} type="email" id="email" className="FormField__Input" placeholder="Enter your email" />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input name="password" value={values.password} onChange={handleChange} type="password" id="password" className="FormField__Input" placeholder="Enter your password"  />
          </div>
          <div className="FormField">
              <button type="submit" className="FormField__Button mr-20">Sign In</button>
              <NavLink to="/Home/Dash" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Home</NavLink>
          </div>
          </form>
        )}
        </Formik>
        </Route>
        <Route path="/Home/Dash">
          <div className="FormTitle">
          <NavLink exact to="/Home/Dash" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Dash</NavLink>  <NavLink to="/Home/Market" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Market</NavLink> <NavLink to="/Home/Rank" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Rank</NavLink>
            <h1>Dashboard</h1>
            <OverviewTable />
            <h1></h1>
            <h1>Portfolio</h1>
            <Portfolio />
          </div>
        </Route>
          <Route exact path="/Home/Market">
            <div className="FormTitle">
              <NavLink exact to="/Home/Dash" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Dash</NavLink>  <NavLink to="/Home/Market" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Market</NavLink> <NavLink to="/Home/Rank" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Rank</NavLink>
              <h1>Enter a stock to buy:</h1>
              <h1></h1>
              <SearchBuy />
              <h1>Enter a stock to sell:</h1>
              <h1></h1>
              <SearchSell />
      
              <h1>Popular Stocks:</h1>
              <h1></h1>
              <StockTable />
            </div>
          </Route>

          <Route exact path="/Home/Rank">
            <div className="FormTitle">
              <NavLink exact to="/Home/Dash" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Dash</NavLink>  <NavLink to="/Home/Market" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Market</NavLink> <NavLink to="/Home/Rank" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Rank</NavLink>
              <h1></h1>
              <h1>Rankings: </h1>
              <MyTable />
            </div>
          </Route>
        </div>
        </div>
    </Router>
  );
}
export default App;
