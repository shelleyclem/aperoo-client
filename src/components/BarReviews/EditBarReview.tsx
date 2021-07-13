import React, { Component, FormEvent } from 'react';
import APIURL from '../../helpers/environment';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

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
        date: string,
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
    date: string,
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
            <>
                <Form onSubmit={this.handleUpdate}>
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
                        <Input type='date' value={this.state.date} onChange={(e)=>this.setState({date: e.target.value})}/> 
                    </FormGroup>

                    <Button type='submit'>Add Review</Button>
                </Form>
            </>
        )
    }
    

}
