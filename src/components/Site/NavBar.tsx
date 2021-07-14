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
    clearToken: () => void,
    allBarReviews: {
            id: number,
            barName: string,
            wineListRating: number, 
            cocktailRating: number,
            foodRating: number,
            atmosphereRating: number,
            outdoorSeating: boolean,
            zipcode: number,
            notes: string,
            username: string,
            date: string,
        },
        updateReview: {
            id: number,
            barName: string,
            wineListRating: number,
            cocktailRating: number,
            foodRating: number,
            atmosphereRating: number,
            outdoorSeating: boolean,
            zipcode: number,
            notes: string,
            username: string,
            date: string,
        },
        deleteReview: {
            id: number,
            barName: string,
            wineListRating: number,
            cocktailRating: number,
            foodRating: number,
            atmosphereRating: number,
            outdoorSeating: boolean,
            zipcode: number,
            notes: string,
            username: string,
            date: string,
        },
        allDrinks: {
            id: number,
            drinkName: string,
            containsAlcohol: boolean,
            mainSpirit: string,
            ingredients: string,
            servingGlassType: string,
            garnish: string,
            notes: string,
            username: string,
            date: string,
        }, 
        updateDrink: {
            id: number, 
            drinkName: string,
            containsAlcohol: boolean,
            mainSpirit: string,
            ingredients: string,
            servingGlassType: string,
            garnish: string,
            notes: string,
            username: string,
            date: string,
        },
        deleteDrink: {
            id: number,
            drinkName: string,
            containsAlcohol: boolean,
            mainSpirit: string,
            ingredients: Array<string>,
            servingGlassType: string,
            garnish: string,
            notes: string,
            username: string,
            date: string,
        }
}

export default class SiteBar extends Component <AcceptedProps> {


    render() {
        return (
    <div className='main'>
        <div>
            <Navbar color='dark' dark expand='md'>
                <Nav className='ml-auto'>
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
                <Nav>
                    <Switch>
                        <Route exact path='/login' component={Login}><Login updateToken={this.props.updateToken}/></Route>
                        <Route exact path='/register' component={Register}><Register updateToken={this.props.updateToken}/></Route>
                        <Route exact path='/addBarReview' component={AddBarReview}><AddBarReview sessionToken={this.props.sessionToken}/></Route>
                        <Route exact path='/browseReviews' component={ViewBarReviews}><ViewBarReviews sessionToken={this.props.sessionToken} allBarReviews={this.props.allBarReviews} updateReview={this.props.updateReview} deleteReview={this.props.deleteReview}/></Route>
                        <Route exact path='/mixNewDrink' component={MixDrink}><MixDrink sessionToken={this.props.sessionToken}/></Route>
                        <Route exact path='/viewDrinks' component={ViewDrinks}><ViewDrinks sessionToken={this.props.sessionToken} allDrinks={this.props.allDrinks} updateDrink={this.props.updateDrink} deleteDrink={this.props.deleteDrink}/></Route>
                    </Switch>
                </Nav>

            </Router>
        </div>
    </div>
        )
    }
}
