import React, { Component, FormEvent } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

type AcceptedProps = {
    sessionToken: string
}

type AddBRState = {
    barName: '',
    wineListRating: '', 
    cocktailRating: '',
    foodRating: '',
    atmosphereRating: '', 
    outdoorSeating: '',
    zipcode: '',
    notes: '',
    username: '',
    date: '', 
}

export default class AddBarReview extends Component <AcceptedProps, AddBRState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            barName: '',
            wineListRating: '',
            cocktailRating: '',
            foodRating: '',
            atmosphereRating: '',
            outdoorSeating: '',
            zipcode: '',
            notes: '',
            username: '',
            date: '',
        }
    }

    handleSubmit(e: FormEvent) {
        e.preventDefault()
        
        fetch('http://localhost:5000/barReview/addBar', {
            method: 'POST',
            body: JSON.stringify(
                { barReview: {
                    barName: this.state.barName,
                    wineListRating: this.state.wineListRating,
                    cocktailRating: this.state.cocktailRating,
                    foodRating: this.state.foodRating,
                    atmosphereRating: this.state.atmosphereRating,
                    outdoorSeating: this.state.outdoorSeating,
                    zipcode: this.state.zipcode,
                    notes: this.state.notes,
                    username: this.state.username,
                    date: this.state.date,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then(res => res.json)
        .then(()=>{this.props.fetchbarReviews()} )
    }

    render() {
        return(
            <div>
                Test
            </div>
        )
    }
}