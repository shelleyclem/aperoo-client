import React, { Component, FormEvent } from 'react';
import { EnumType } from 'typescript';

type RegisterProps = {
    updateToken: (newToken: string) => void,
    changeView: () => void
}

type RegisterState = {
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    // role: EnumType {'user', 'admin'} 
}

export default class Register extends Component <RegisterProps, RegisterState> {
    constructor(props: RegisterProps) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            // role: enum 
        }
    }
    handleSubmit(e: FormEvent) {
        e.preventDefault()

        fetch('http://localhost:5000/user/register', {
            method: 'POST',
            body: JSON.stringify(
                {user: {
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


}