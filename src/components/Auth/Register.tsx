
import React, { Component, FormEvent } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { EnumType } from 'typescript';

type AcceptedProps = {
    updateToken: (newToken: string) => void,
}

type RegisterState = {
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    role: 'user' //!ENUM?
}

export default class Register extends Component <AcceptedProps, RegisterState> {
    construcor(props: AcceptedProps) {
        super(props) //! super throwing error. Remove?
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            role: 'user', //! needs to default to user
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e: FormEvent) {
        e.preventDefault()

        fetch('http://localhost:5000/user/register', {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    username: this.state.username,
                    password: this.state.password,
                }
            }),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }) .then (res => res.json())
        .then (data => this.props.updateToken(data.sessionToken))
    }

    render() {
        return (
            <div className='register'>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor='firstName'>First Name</Label>
                        <Input type='text' value={this.state.firstName} onChange={(e)=>this.setState({firstName: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='lastName'>Last Name</Label>
                        <Input type='text' value={this.state.lastName} onChange={(e)=>this.setState({lastName: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='username'>Username</Label>
                        <Input type='text' value={this.state.username} onChange={(e)=>this.setState({username: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='password'>Password</Label>
                        <Input type='password' value={this.state.password} onChange={(e)=>this.setState({password: e.target.value})}/>
                    </FormGroup>

                    <Button type='submit'>Register</Button>
                </Form>
            </div>
        )
    }
}