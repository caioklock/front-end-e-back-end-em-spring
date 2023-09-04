import React, { Component } from 'react';

class ExemploComponent extends Component {
    constructor() {
        super();
        this.state = {
            mensagem: ''
        };
    }

    componentDidMount() {
        fetch('/api/mensagem')
            .then(response => response.text())
            .then(data => this.setState({ mensagem: data }));
    }

    render() {
        return (
            <div>
                <h1>Mensagem do Back-End:</h1>
                <p>{this.state.mensagem}</p>
            </div>
        );
    }
}

export default ExemploComponent;