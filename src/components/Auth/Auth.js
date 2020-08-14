import React, {Component} from 'react';
import axios from 'axios';

class Auth extends Component {
    constructor() {
        super();
        
        this.state = {
            username: '',
            password: '',
            profile_pic: ''
        }

        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
    }

    handleUsernameInput(event) {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordInput(event) {
        this.setState({
            password: event.target.value
        })
    }

    register = () => {
        const { username, password, profile_pic } = this.state;
        axios.post('/auth/register', {username, password, profile_pic}).then(res => {
            
        })
    }



    render() {
        return <div>
            <input type='text' value={this.state.username} onChange={this.handleUsernameInput}/>
            <input type='text' value={this.state.password} onChange={this.handlePasswordInput} />
            <button> Login </button>
            <button> Register </button>
        </div>
    }
}

export default Auth;
