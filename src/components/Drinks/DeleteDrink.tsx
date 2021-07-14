import React, { Component } from 'react';
import APIURL from '../../helpers/environment';

type AcceptedProps = {
    sessionToken: string
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

type DeleteDrinkState = {
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

export default class DeleteDrink extends Component<AcceptedProps, DeleteDrinkState> {
    constructor(props: AcceptedProps) {
        super(props) 
        this.state = {
            id: props.deleteDrink.id,
            drinkName: props.deleteDrink.drinkName,
            containsAlcohol: props.deleteDrink.containsAlcohol,
            mainSpirit: props.deleteDrink.mainSpirit,
            ingredients: props.deleteDrink.ingredients,
            servingGlassType: props.deleteDrink.servingGlassType,
            garnish: props.deleteDrink.garnish,
            notes: props.deleteDrink.notes,
            username: props.deleteDrink.username,
            date: props.deleteDrink.date
        }
    }

    handleDelete = (id: number) => {
        fetch(`${APIURL}/drink/${this.props.deleteDrink.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application.json',
                'Authorization': this.props.sessionToken
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }

    componentDidMount() {
        this.handleDelete
    }

    render() {
        return (
            <div>{this.handleDelete}</div>
        )
    }
}