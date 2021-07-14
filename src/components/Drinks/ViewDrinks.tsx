import React, { Component } from 'react'
import APIURL from "../../helpers/environment";
// import EditDrink from "./EditDrink";
// import DeleteDrink from './DeleteDrink';
import { Button } from "reactstrap";

export interface DrinkInfo {
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
}

type AcceptedProps = {
    sessionToken: string,
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

type ViewDrinkState = {
    drinks: DrinkInfo[]
}

export default class ViewDrinks extends Component<AcceptedProps, ViewDrinkState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            drinks: [{
                id: 0,
                drinkName: '',
                containsAlcohol: false,
                mainSpirit: '',
                ingredients: '',
                servingGlassType: '',
                garnish: '',
                notes: '',
                username: '',
                date: '',
            }]
        }
    }

    fetchDrinks = async () => {
        fetch(`${APIURL}/drinks/all`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken,
            })
        }).then(res => res.json())
        .then(drinks => this.setState({drinks: drinks}))
        .catch((err) => console.log(err))
    }

    componentDidMount() {
        this.fetchDrinks()
    }

    render() {
        const { drinks } = this.state;
        return(
            <div className='mainDiv'>
                <div className='drinkMap'>
                    {drinks.map(drinks => {
                        return (
                            <dl key={drinks.id}>
                                <h3>{drinks.drinkName}</h3>
                                <dt>Contains Alcohol: {drinks.containsAlcohol}</dt>
                                <dt>Main Spirit: {drinks.mainSpirit}</dt>
                                <dt>Ingredients: {drinks.ingredients}</dt>
                                <dt>Type of Serving Glass: {drinks.servingGlassType}</dt>
                                <dt>Garnish: {drinks.garnish}</dt>
                                <dt>Notes: </dt>
                                    <dd>{drinks.notes}</dd>
                                <p>Submitted by: {drinks.username} on: {drinks.date}</p>

                                    <h3>Need to edit this drink?</h3>
                                    {/*<EditDrink updateDrink={this.props.updateDrink} sessionToken={this.props.sessionToken} /> */}

                                <Button> Delete Drink
                                    {/* <DeleteDrink sessionToken={this.props.sessionToken} deleteDrink={this.props.deleteDrink}/> */}
                                </Button>
                            </dl>
                        )
                    })}
                </div>
            </div>
        )
    }
}

