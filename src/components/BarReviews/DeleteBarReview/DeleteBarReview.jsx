import React, { useState, useEffect } from 'react';

const DeleteBarReview= (props) => {
    const deleteFetch = () => {
        fetch(`http://localhost:5000/addBarReview/${props.barReview.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(res => console.log(res))
        .then(() => {props.fetchbarReviews})
    }

    const [click, setClick] = useState(false);

    return (
        <div>
            Test
        </div>
    )
}
