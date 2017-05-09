/**
 * Created by tarik on 09.05.2017.
 */
let url = "http://rutracker.club/programmy/5925-jetbrains-webstorm-2016-pc.html";
let url1 = "https://vk.com";
import React from 'react'
import { render } from 'react-dom'

const get = () => <div>
        <a href={url} className="big_button">{url}</a>
        <br />
        <a href={url1} className="vk_button">
            <img src="http://ferumstal.ru/images/vk-logo.png"/>
        </a>
        <br/>
        <button onClick={() => fetch('./components/1.json')}>GET</button>
    </div>

module.export = get;
