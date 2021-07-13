import React, { Component, FormEvent } from 'react';
import APIURL from '../../helpers/environment';

type AcceptedProps = {
    sessionToken: string,
    updateReview: {
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
        date: Date
    }
}

type EditBRState = {
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
    date: Date
}

export default class EditBarReview extends Component<AcceptedProps, EditBRState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            id: props.updateReview.id,
            barName: props.updateReview.barName,
            wineListRating: props.updateReview.wineListRating,
            cocktailRating: props.updateReview.cocktailRating,
            foodRating: props.updateReview.foodRating,
            atmosphereRating: props.updateReview.atmosphereRating,
            outdoorSeating: props.updateReview.outdoorSeating,
            zipcode: props.updateReview.zipcode,
            notes: props.updateReview.notes,
            username: props.updateReview.username,
            date: props.updateReview.date, 
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    
    handleUpdate(e: FormEvent) {
        e.preventDefault()

        fetch(`${APIURL}/barReview/${this.props.updateReview.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                barName: this.state.barName,
                wineListRating: this.state.wineListRating,
                cocktailRating: this.state.cocktailRating,
                foodRating: this.state.foodRating,
                atmosphereRating: this.state.atmosphereRating,
                outdoorSeating: this.state.outdoorSeating,
                zipcode: this.state.zipcode,
                username: this.state.username,
                date: this.state.date,
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then(res => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
        }
    
    render() {
        return (
            <div>
                Test
            </div>
        )
    }
    

}
