import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {userInfoToRedux} from '../../ducks/reducer';

class Auth extends Component {
    constructor() {
        super();
        
        this.state = {
            username: '',
            password: '',
            profile_pic: '',
            newUser: false
        }

        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
    }

    toggle = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    };

    handleUsernameInput(event) {
        this.setState({
            username: event.target.value
        })
    };

    handlePasswordInput(event) {
        this.setState({
            password: event.target.value
        })
    };

    register = () => {
        const { username, password } = this.state;
        axios.post('/api/auth/register', {username, password}).then(res => {
            const {  username, user_id, profile_pic } = res.data; 
            this.props.userInfoToRedux( username, user_id, profile_pic );
            this.props.history.push('/dashboard')
        }).catch(err => console.log(err))
    };
    
    login = () => {
        const { username, password } = this.state;
        axios.post('/api/auth/login', {username, password}).then(res => {
            const { username, user_id, profile_pic } = res.data;
            this.props.userInfoToRedux(username, user_id, profile_pic);
            this.props.history.push('/dashboard')
            console.log(res.data)
        }).catch(err => console.log(err))
    };

    render() {
        return <div>
            <input type='text' value={this.state.username} onChange={this.handleUsernameInput}/>
            <input type='text' value={this.state.password} onChange={this.handlePasswordInput} />
            <button onClick={() => this.login()}> Login </button>
            <button onClick={() => this.register()}> Register </button>
        </div>
    }
}


export default connect(null, {userInfoToRedux})(Auth);
