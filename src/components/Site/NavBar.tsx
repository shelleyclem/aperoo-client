import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Auth/Login';
import Register from '../Auth/Register'
import AddBarReview from '../BarReviews/AddBarReview';
import ViewBarReviews from '../BarReviews/ViewBarReviews';
import MixDrink from '../Drinks/MixDrink';
import ViewDrinks from '../Drinks/ViewDrinks'

type AcceptedProps = {
    sessionToken: string,
    updateToken: (newToken: string) => void,
    clearToken: () => void

}

export default class SiteBar extends Component <AcceptedProps> {


    render() {
        return (
    <div>
        <div>
            <Navbar color='dark' dark expand='md'>
                <Nav class='ml-auto'>
                    <NavItem>
                        <Link to='/login' className='site-link'>Log In</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/register'className='site-link'>Register</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/addBarReview' className='site-link'>Review a Bar</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/browseReviews' className='site-link'>Browse Reviews</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/mixNewDrink'className='site-link'>Mix a Drink</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/viewDrinks' className='site-link'>Browse Drinks</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
        <div>
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login}><Login updateToken={this.props.updateToken}/></Route>
                    <Route exact path='/register' component={Register}><Register updateToken={this.props.updateToken}/></Route>
                    <Route exact path='/addBarReview' component={AddBarReview}><AddBarReview sessionToken={this.props.sessionToken}/></Route>
                    <Route exact path='/browseReviews' component={ViewBarReviews}><ViewBarReviews/></Route>
                    <Route exact path='/mixNewDrink' component={MixDrink}><MixDrink sessionToken={this.props.sessionToken}/></Route>
                    <Route exact path='/viewDrinks' component={ViewDrinks}><ViewDrinks sessiontoken={this.props.sessionToken}/></Route>
                </Switch>

            </Router>
        </div>
    </div>
        )
    }
}
