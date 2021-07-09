import React, { Component, FormEvent } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

type AcceptedProps = {
    updateToken: (newToken: string) => void,
}

type LoginState = {
    username: string, 
    password: string,
}

export default class Login extends Component <AcceptedProps, LoginState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e: FormEvent) {
        e.preventDefault()

        fetch('http://localhost:5000/user/login', {
            method: 'POST',
            body: JSON.stringify(
                { user: {
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
                <div className='Login'> 
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label htmlFor='username'>username</Label>
                            <Input value={this.state.password} onChange={(e)=> this.setState({username: e.target.value})}/>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor='password'>password</Label>
                            <Input type='password' value={this.state.password} onChange={(e)=> this.setState({password: e.target.value})}/>
                        </FormGroup>
                        <br />
                        <Button type='submit' >Log In</Button>
                    </Form>
                </div>
            )
    }
};





