/**
 * Created by tarik on 09.05.2017.
 */
import React, { PropTypes, Component } from 'react'
import './User.css'

export default class User extends Component {
    render() {
        const {name, error} = this.props;
        let template
        if(name){
            template = <p className = 'p_user'>Привет, {name}!</p>
        } else {
            template = <button className='btn' onClick={this.props.handleLogin}>Войти</button>
        }
        return <div className='ib user'>
            {template}
            {error ? <p className='error'> {error}. <br /> Попробуйте еще раз.</p> : ''}
        </div>
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};