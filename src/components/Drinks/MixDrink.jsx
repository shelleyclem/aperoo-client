import React, { useState } from 'react';

const MixDrink = (props) => {
    const [drinkName, setDrinkName] = useState('');
    const [containsAlcohol, setContainsAlcohol] = useState('');
    const [mainSpirit, setMainSpirit] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [servingGlassType, setServingGlassType] = useState('');
    const [garnish, setGarnish] = useState('');
    const [notes, setNotes] = useState('');
    const [username, setUsername] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        fetch('http://localhost:5000/drink/', {
            method: 'POST',
            body: JSON.stringify({
                drinkName: drinkName,
                containsAlcohol: containsAlcohol,
                mainSpirit: mainSpirit,
                ingredients: ingredients,
                servingGlassType: servingGlassType,
                garnish: garnish,
                notes: notes,
                username: username,
                date: date,
            }),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(res => console.log(res))
        .then(()=> {props.fetchDrinks()})
        props.createActiveOff();
    }

    return (
        <div>Test</div>
    )
}
