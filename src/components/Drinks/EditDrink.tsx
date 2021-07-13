import { StringLiteralTypeAnnotation } from '@babel/types';
import React, { Component, FormEvent } from 'react';
import APIURL from '../../helpers/environment';


type AcceptedProps = {
    sessionToken: string,
    updateDrink: {
        id: number, 
        drinkName: string,
        containsAlcohol: boolean,
        mainSpirit: string,
        ingredients: Array<string>,
        servingGlassType: string,
        garnish: string,
        notes: string,
        username: string,
        date: Date,
    }
}

type EditDrinkState = {
    id: number
    drinkName: string,
    containsAlcohol: boolean,
    mainSpirit: string,
    ingredients: Array<string>,
    servingGlassType: string,
    garnish: string,
    notes: string,
    username: string,
    date: Date,
}

export default class EditDrink extends Component<AcceptedProps, EditDrinkState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            id: props.updateDrink.id,
            drinkName: props.updateDrink.drinkName,
            containsAlcohol: props.updateDrink.containsAlcohol,
            mainSpirit: props.updateDrink.mainSpirit,
            ingredients: props.updateDrink.ingredients,
            servingGlassType: props.updateDrink.servingGlassType,
            garnish: props.updateDrink.garnish,
            notes: props.updateDrink.notes,
            username: props.updateDrink.username,
            date: props.updateDrink.date,
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleUpdate(e: FormEvent) {
        e.preventDefault()

        fetch(`APIURL/drink/${this.props.updateDrink.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                drinkName: this.state.drinkName,
                containsAlcohol: this.state.containsAlcohol,
                mainSpirit: this.state.mainSpirit,
                ingredients: this.state.ingredients,
                servingGlassType: this.state.servingGlassType,
                garnish: this.state.garnish,
                notes: this.state.notes,
                username: this.state.username,
                date: this.state.date,
            }),
            headers: new Headers({
                'Content-Type': 'application.json',
                'Authorization': this.props.sessionToken
            })
        })
        .then(res => res.json())
        .then((data) => console.log(data))
    }

    render() {
        return(
            <div>
                
            </div>
        )
    }
}