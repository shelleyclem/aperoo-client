import React, { Component, FormEvent } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { InputType } from 'reactstrap/lib/Input';

type AcceptedProps = {
    sessionToken: string
}

type MixDrinkState = {
    drinkName: string,
    containsAlcohol: InputType,
    mainSpirit: string,
    ingredients: string,
    servingGlassType: string,
    garnish: string,
    notes: string,
    username: string,
    date: string,
}

export default class MixNewDrink extends Component<AcceptedProps, MixDrinkState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            drinkName: '',
            containsAlcohol: 'radio',
            mainSpirit: '',
            ingredients: '',
            servingGlassType: '',
            garnish: '',
            notes: '',
            username: '',
            date: '', 

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e: FormEvent) {
        e.preventDefault()

        fetch('http://localhost:5000/drink/mixNewDrink', {
            method: 'POST',
            body: JSON.stringify(
                { drink: {
                    drinkName: this.state.drinkName,
                    containsAlcohol: this.state.containsAlcohol,
                    mainSpirit: this.state.mainSpirit,
                    ingredients: this.state.ingredients,
                    servingGlassType: this.state.servingGlassType,
                    garnish: this.state.garnish,
                    notes: this.state.notes,
                    username: this.state.username,
                    date: this.state.date,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then(res => res.json())
        .then((data) => {console.log(data)
        })
    }

    render() {
        return(
            <div className='mixNewDrink'>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor='drinkName'>Drink Name</Label>
                        <Input type='text' value={this.state.drinkName} onChange={(e)=>this.setState({drinkName: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='containsAlcohol'>Contains Alcohol?</Label>
                        <Input type='radio' name='radio1' value={this.state.containsAlcohol} onChange={(e)=>this.setState({containsAlcohol: Boolean(e.target.value)})}/>{' '}
                    </FormGroup> 

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
