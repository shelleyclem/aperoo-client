import React from 'react';
import EditBarReview from './EditBarReview';
import DeleteBarReview from './DeleteBarReview';
import APIURL from '../../helpers/environment';


type AcceptedProps = {
    sessionToken: string,
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
    }
}

const ViewBarReviews = (props: AcceptedProps) => {
    
    fetch(`${APIURL}/barReview/all`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.sessionToken,
        })
    }).then(res => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

    return props.allBarReviews.map((barReview, index) => {
        return (
            <dl key={index}>
                <h3>{barReview.barName}</h3>
                <dt>Wine List Rating: {barReview.wineListRating}/10</dt>
                <dt>Cocktail Rating: {barReview.cocktailRating}/10</dt>
                <dt>Food Rating: {barReview.foodRating}/10</dt>
                <dt>Atmosphere Rating: {barReview.atmosphereRating}/10</dt>
                <dt>Zip Code: {barReview.zipcode}</dt>
                <dt>Notes: </dt>
                <dd>{barReview.notes}</dd>
                <p>Submitted by: {barReview.username} on {barReview.date}</p>
                <span> 
                    {/* <button><EditBarReview/>Edit Bar Review</button> */}
                    <DeleteBarReview />
                </span>
            </dl>
            )
    })
}


export default ViewBarReviews;