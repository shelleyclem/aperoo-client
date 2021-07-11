import React, { Component, FormEvent } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

type AcceptedProps = {
    sessionToken: string
}

type AddBRState = {
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
            date: '', //! figure out state for date type
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
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div className='addBarReview'>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor='barName'>Name of Bar or Restaurant</Label>
                        <Input type='text' value={this.state.barName} onChange={(e)=>this.setState({barName: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Wine List Rating</Label>
                        <Input type='number' max='10' value={this.state.wineListRating} onChange={(e)=>this.setState({wineListRating: Number (e.target.value)})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Cocktail Rating</Label>
                        <Input type='number' max='10' value={this.state.cocktailRating} onChange={(e)=>this.setState({cocktailRating: Number (e.target.value)})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Food Rating</Label>
                        <Input type='number' max='10' value={this.state.foodRating} onChange={(e)=>this.setState({foodRating: Number (e.target.value)})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Atmostphere Rating</Label>
                        <Input type='number' max='10' value={this.state.atmosphereRating} onChange={(e)=>this.setState({atmosphereRating: Number (e.target.value)})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='outdoorSeatng'>Outdoor Seating Available?</Label>
                        <Input type='checkbox' value={this.state.barName} onChange={(e)=>this.setState({outdoorSeating: Boolean (e.target.value)})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Zip Code</Label>
                        <Input type='number' value={this.state.zipcode} onChange={(e)=>this.setState({zipcode: Number (e.target.value)})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Notes</Label>
                        <Input type='textarea' value={this.state.notes} onChange={(e)=>this.setState({notes: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Username</Label>
                        <Input type='text' value={this.state.username} onChange={(e)=>this.setState({username: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Date</Label>
                        <Input type='date' value={this.state.date} onChange={(e)=>this.setState({date: e.target.value})}/> //! error with date 
                    </FormGroup>

                    <Button type='submit'>Add Review</Button>
                </Form>
            </div>
        )
    }
}