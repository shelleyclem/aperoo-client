
import React, { Component, FormEvent, } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../../helpers/environment';
import {RouteComponentProps} from 'react-router-dom';


type AcceptedProps = {
    sessionToken: string,
    updateDrink: {
        id: number, 
        drinkName: string,
        containsAlcohol: boolean,
        mainSpirit: string,
        ingredients: string,
        servingGlassType: string,
        garnish: string,
        notes: string,
        username: string,
        date: string,
    }
}

type EditDrinkState = {
    id: number
    drinkName: string,
    containsAlcohol: boolean,
    mainSpirit: string,
    ingredients: string,
    servingGlassType: string,
    garnish: string,
    notes: string,
    username: string,
    date: string,
}

export default class EditDrink extends Component<AcceptedProps, EditDrinkState> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            id: props.updateDrink.id,
            drinkName: props.updateDrink.drinkName,
            containsAlcohol: props.updateDrink.containsAlcohol,
            mainSpirit: props.updateDrink.mainSpirit,
            ingredients: props.updateDrink.ingredients,
            servingGlassType: props.updateDrink.servingGlassType,
            garnish: props.updateDrink.garnish,
            notes: props.updateDrink.notes,
            username: props.updateDrink.username,
            date: props.updateDrink.date,
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleUpdate(e: FormEvent) {
        e.preventDefault()

        fetch(`${APIURL}/drink/${this.props.updateDrink.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                drinkName: this.state.drinkName,
                containsAlcohol: this.state.containsAlcohol,
                mainSpirit: this.state.mainSpirit,
                ingredients: this.state.ingredients,
                servingGlassType: this.state.servingGlassType,
                garnish: this.state.garnish,
                notes: this.state.notes,
                username: this.state.username,
                date: this.state.date,
            }),
            headers: new Headers({
                'Content-Type': 'application.json',
                'Authorization': this.props.sessionToken
            })
        })
        .then(res => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.handleUpdate}>
                    <FormGroup>
                        <Label htmlFor='drinkName'>Drink Name</Label>
                        <Input type='text' value={this.state.drinkName} onChange={(e)=>this.setState({drinkName: e.target.value})}/>
                    </FormGroup>

                    {/* <FormGroup>
                    <Label htmlFor='containsAlcohol'>Does it Contain Alcohol?</Label>
                        <Input type='checkbox' value={this.state.containsAlcohol} onChange={(e)=>this.setState({containsAlcohol: Boolean (e.target.value)})}/>
                    </FormGroup>  */}

                    <FormGroup>
                        <Label htmlFor='mainSpirit'>Main Spirit</Label>
                        <Input type='text' value={this.state.mainSpirit} onChange={(e)=>this.setState({mainSpirit: e.target.value})}/> 
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='ingredients'>Ingredients</Label>
                        <Input type='textarea' value={this.state.ingredients} onChange={(e)=>this.setState({ingredients: e.target.value})}/> 
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='servingGlassType'>Type of Serving Glass</Label>
                        <Input type='text' value={this.state.servingGlassType} onChange={(e)=>this.setState({servingGlassType: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='garnish'>Garnish</Label>
                        <Input type='text' value={this.state.garnish} onChange={(e)=>this.setState({garnish: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='notes'>Instructions & Notes</Label>
                        <Input type='textarea' value={this.state.notes} onChange={(e)=>this.setState({notes: e.target.value})} />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='username'>Username</Label>
                        <Input type='text' value={this.state.username} onChange={(e)=>this.setState({username: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='date'>Date</Label>
                        <Input type='date' value={this.state.date} onChange={(e)=>this.setState({date: e.target.value})} /> 
                    </FormGroup>

                    <Button type='submit'>Mix New Drink</Button>
                </Form>
            </div>
        )
    }
}