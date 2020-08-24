import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
    render() {
        console.log(this.props)
        return <div>
            <h1>{this.props.username}</h1>
            <h1>{this.props.profile_pic}</h1>
            <button><Link to='/dashboard'> Home </Link></button>
            <button><Link to='/new'> New Post </Link></button>
            <button><Link to='/'> Logout </Link></button>
        </div>
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Nav);

