/**
 * Created by tarik on 09.05.2017.
 */
import React, { PropTypes, Component } from 'react'
import '../components/Page.css'

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.getPhotos(+e.target.innerText)
    }
    render() {
        const {year, photos, fetching} = this.props;
        return <div>
            <p>
                <a onClick={::this.onYearBtnClick}>2016</a>
                <a onClick={::this.onYearBtnClick}>2015</a>
                <a onClick={::this.onYearBtnClick}>2014</a>
                <a onClick={::this.onYearBtnClick}>2013</a>
                <a onClick={::this.onYearBtnClick}>2012</a>
            </p>
            <h3>{year} год</h3>
            {
                fetching ?
                    <p>Загрузка...</p>
                    :
                    <p>У тебя {photos.length} фото.</p>
            }
        </div>
    }
}
Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired
};