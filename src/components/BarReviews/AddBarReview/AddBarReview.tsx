import React, { Component, FormEvent } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

type AcceptedProps = {
    sessionToken: string
}

type AddBRState = {
    barName: '',
    wineListRating: number, 
    cocktailRating: number,
    foodRating: number,
    atmosphereRating: number, 
    outdoorSeating: boolean,
    zipcode: number,
    notes: '',
    username: '',
    date: '', 
}

export default class AddBarReview extends Component <AcceptedProps, AddBRState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            barName: '',
            wineListRating: 0,
            cocktailRating: 0,
            foodRating: 0,
            atmosphereRating: 0,
            outdoorSeating: false,
            zipcode: 46201,
            notes: '',
            username: '',
            date: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
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
        .then(res => res.json())
        .then((data)=>{console.log(data)
        })
    }

    render() {
        return(
            <div className='addBarReview'>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label></Label>
                        <Input/>
                    </FormGroup>

                </Form>
            </div>
        )
    }
}