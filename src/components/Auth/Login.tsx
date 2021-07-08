import React, { Component, FormEvent } from 'react';

type AcceptedProps = {
    updateToken: (newToken: string) => void,
    changeView: () => void
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
                <div>
                    Test
                </div>
            )
    }
}





