import React, {Component} from 'react';

import './Header.css'
import {images} from "../../Constants";

export default class Header extends Component {
    render() {
        return (
            <div className="HeaderContainer">
                <div className="HeaderLogo">
                    <img src={images.marvel} alt="marvelLogo"/>
                    <p>Marvel Characters</p>
                </div>
            </div>
        );
    }
}
