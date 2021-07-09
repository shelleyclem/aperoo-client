import React from 'react';

const ViewBarReviews = (props) => {
    
    return props.barReview.map((barReview, index) => {
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
                {/* Button for Edit Plant */}
                {/* Button for Delete Plant */}
            </dl>
            )
        })
}


export default ViewBarReviews;