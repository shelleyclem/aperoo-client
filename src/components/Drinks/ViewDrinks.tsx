import React from "react";
import EditDrink from "./EditDrink";
import APIURL from "../../helpers/environment";
import DeleteDrink from './DeleteDrink';

type AcceptedProps = {
    sessionToken: string,
    allDrinks: {
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

const ViewDrinks = (props: AcceptedProps) => {
    fetch(`${APIURL}/drink/all`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.sessionToken,
        })
    }).then(res => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

    return props.allDrinks.map((drink, index) => {
        return(
            <dl key={index}>
            <h3>{drink.drinkName}</h3>
            <dt>Contains Alcohol: {drink.containsAlcohol}</dt>
            <dt>Main Spirit: {drink.mainSpirit}</dt>
            <dt>Ingredients: {drink.ingredients}</dt>
            <dt>Type of Serving Glass: {drink.servingGlassType}</dt>
            <dt>Garnish: {drink.garnish}</dt>
            <dt>Notes: </dt>
            <dd>{drink.notes}</dd>
            <p>Submitted by: {drink.username} on {drink.date}</p>
            <span> 
                {/* <button><EditDrink/>Edit Bar Review</button> */}
                <DeleteDrink />- make only visible to admin??
            </span>
        </dl>
        )
    })
}