import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './HeroCard.css';
import {Modal} from "../modal/Modal";
import {images} from "../../Constants";

const HerosDetailsSection = ({c, title, onclick}) =>
    <div className="HerosDetailsSection">
        <div className="HerosDetailsSectionHeader">
            <div className="HerosDetailsSectionHeaderBackBtn"
                 onClick={onclick}>
                <img src={images.backArrow} alt='back'/>
            </div>
            <div className="HerosDetailsSectionHeaderTitle">{title}</div>
        </div>
        <div className="HerosDetailsSectionContent">
            {c[title].items.length === 0 ?
                <div className="HerosDetailsSectionContentNoItems">
                    There is no available {title} for this hero
                </div>
                :
                <div className="HerosDetailsSectionContentItems">
                    {c[title].items.map((e, i) => {
                            return (
                                <div key={i} className="HerosDetailsSectionContentItem">{e.name}</div>
                            );
                        }
                    )}
                </div>
            }
        </div>
    </div>;

HerosDetailsSection.prototype = {
    c: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired
};

export default class HeroCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHeroDetails: false,
            page: 0
        };
    }

    render() {
        const {c} = this.props;
        return (
            <div className="HeroContainer">
                <div className="HeroPhoto" onClick={() => this.setState({showHeroDetails: true})}>
                    <img src={`${c.thumbnail.path}/standard_fantastic.${c.thumbnail.extension}`} alt="superHeroPhoto"/>
                    <button>INFO</button>
                </div>
                <div className="HeroName">
                    {c.name}
                </div>
                <div className="HeroDesc">
                    <a href={c.urls[1]?c.urls[1].url:'#'}>Wiki</a>
                    <a href={c.urls[2]?c.urls[2].url:'#'}>Comic link</a>
                </div>

                <Modal onClose={() => {
                    this.setState({showHeroDetails: false});
                }} show={this.state.showHeroDetails}>
                    <div className="HeroDetails">
                        <div className="HerosDetailsTitle">
                            {c.name}
                        </div>
                        {this.state.page === 0 && <div className="HerosDetailsContent">
                            <button className="HerosDetailsContentBtn" onClick={() => this.setState({page: 1})}>Comics
                            </button>
                            <button className="HerosDetailsContentBtn" onClick={() => this.setState({page: 2})}>Events
                            </button>
                            <button className="HerosDetailsContentBtn" onClick={() => this.setState({page: 3})}>Series
                            </button>
                            <button className="HerosDetailsContentBtn" onClick={() => this.setState({page: 4})}>Stories
                            </button>
                        </div>}
                        {this.state.page === 1 &&
                        <HerosDetailsSection c={c} title={'comics'} onclick={() => this.setState({page: 0})}/>}
                        {this.state.page === 2 &&
                        <HerosDetailsSection c={c} title={'events'} onclick={() => this.setState({page: 0})}/>}
                        {this.state.page === 3 &&
                        <HerosDetailsSection c={c} title={'series'} onclick={() => this.setState({page: 0})}/>}
                        {this.state.page === 4 &&
                        <HerosDetailsSection c={c} title={'stories'} onclick={() => this.setState({page: 0})}/>}
                    </div>
                </Modal>
            </div>
        );
    }
}
