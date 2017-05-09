/**
 * Created by tarik on 09.05.2017.
 */
import React, { PropTypes, Component } from 'react'
import '../components/Page.css'

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.setYear(+e.target.innerText)
    }
    render() {
        const {year, photos} = this.props;
        console.log(this.props);
        return <div>
            <p>
                <a onClick={::this.onYearBtnClick}>2016</a>
                <a onClick={::this.onYearBtnClick}>2015</a>
                <a onClick={::this.onYearBtnClick}>2014</a>
                <a onClick={::this.onYearBtnClick}>2013</a>
                <a onClick={::this.onYearBtnClick}>2012</a>
            </p>
            <h3>{year} год</h3>
            <p>У тебя {photos.length} фото за {year} год</p>
        </div>
    }
}
Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
};