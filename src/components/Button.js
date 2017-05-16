/**
 * Created by tarik on 09.05.2017.
 */
import React, {Component} from 'react'
import getuser from '../actions/Getusers.js'
import './Button.css'

class Button extends Component {
    render() {
        let url = 'http://rutracker.club/programmy/5925-jetbrains-webstorm-2016-pc.html';
        let url1 = 'https://vk.com';
        // function get() {
        //     console.log(getuser)
        // }
        return <div className='but'>
            <a href={url} className='button'>{url}</a>
            <br />
            <a href={url1} className='button'>{url1}</a>
            <br />
            <button onClick={() => getuser()}>GET</button>
        </div>
    }
}
export default Button