import React, { Component } from 'react';
import APIURL from '../../helpers/environment';

type AcceptedProps = {
    sessionToken: string 
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
    }
}

type DeleteBRState = {
    id: number,
    barName: string,
    wineListRating: number,
    cocktailRating: number,
    foodRating: number,
    atmosphereRating: number,
    outdoorSeating: boolean,
    zipcode: number,
    notes:string,
    username: string,
    date: string
}

export default class DeleteBarReview extends Component<AcceptedProps, DeleteBRState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            id: props.deleteReview.id,
            barName: props.deleteReview.barName,
            wineListRating: props.deleteReview.wineListRating,
            cocktailRating: props.deleteReview.cocktailRating,
            foodRating: props.deleteReview.foodRating,
            atmosphereRating: props.deleteReview.atmosphereRating,
            outdoorSeating: props.deleteReview.outdoorSeating,
            zipcode: props.deleteReview.zipcode,
            notes: props.deleteReview.notes,
            username: props.deleteReview.username,
            date: props.deleteReview.date,
        }
        
    }
    handleDelete = (id: number) => {
        fetch(`${APIURL}/barReview${this.props.deleteReview.id}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }) 
        .then(res => res.json())
        .then((data) => console.log(data))
        
    }

    componentDidMount() {
        this.handleDelete
    }

    render() {
        return (
            <>
                
            </>
        )
    }
}