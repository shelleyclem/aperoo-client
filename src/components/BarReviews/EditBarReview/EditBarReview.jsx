import React, { useState } from 'react';

const EditBarReview = (props) => {
    const [editBRName, setEditBRName] = useState(props.brToUpdate.barName)
    const [editWLRating, setEditWLRating] = useState(props.brToUpdate.wineListRating)
    const [editCocktailRating, setEditCocktailRating] = useState(props.brToUpdate.cocktailRating)
    const [editFoodRating, setEditFoodRating] = useState(props.brToUpdate.foodRating)
    const [editAtmosphereRating, setEditAtmospereRating] = useState(props.brToUpdate.atmosphereRating)
    const [editOutdoorSeating, setEditOutdoorSeating] = useState(props.brToUpdate.outdoorSeating)
    const [editZipcode, setEditZipcode] = useState(props.brToUpdate.zipcode)
    const [editNotes, setEditNotes] = useState(props.brToUpdate.notes)
    const [editUsername, setEditUsername] = useState(props.brToUpdate.username)
    const [editDate, setEditDate] = useState(props.brToUpdate.date)

    const brUpdate = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/barReview/${props.brToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                barName: editBRName,
                wineListRating: editWLRating,
                cocktailRating: editCocktailRating,
                foodRating: editFoodRating,
                atmosphereRating: editAtmosphereRating,
                outdoorSeating: editOutdoorSeating,
                zipcode: editZipcode,
                notes: editNotes,
                username: editUsername,
                date: editDate,
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(res => console.log(res))
        .then(() => {props.fetchBarReviews})
    }

    return (
        <div>
            Test
        </div>
    )
}

export default EditBarReview;