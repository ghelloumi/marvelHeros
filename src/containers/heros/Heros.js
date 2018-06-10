import React, {Component} from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import {getCharacters} from "../../services/Api";

import './Heros.css';
import HeroCard from "../../components/HeroCard/HeroCard";
import {images} from "../../Constants";

export default class Heros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            herosList: [],
            options: {page: 0, count: 20, name: '', nameStartsWith: ''},
            hasMoreHeros: true,
            search: ''
        };

        this.getHeros = this.getHeros.bind(this);
        this.getHerosBySearch = this.getHerosBySearch.bind(this);
    }

    async getHeros(options) {
        try {
            const res = await getCharacters(options);
            this.setState(prevState => ({
                herosList: prevState.options.page === 0 ?
                    res.data.results :
                    [...prevState.herosList, ...res.data.results],

                options: {
                    ...prevState.options,
                    page: prevState.options.page + 1,
                },
                hasMore: res.data.results.length >= res.data.results.limit
            }));
        } catch (e) {
            console.log(e);
        }
    }

    async getHerosBySearch(e) {
        e.preventDefault();
        this.setState({
            options: {page: 0, count: 20, name: '', nameStartsWith: ''},
        });
        const res = await getCharacters({...this.state.options, nameStartsWith: this.state.search});
        this.setState(prevState => ({
            herosList: prevState.options.page === 0 ?
                res.data.results :
                [...prevState.herosList, ...res.data.results],

            options: {
                ...prevState.options,
                page: prevState.options.page + 1,
            },
            hasMore: res.data.results.length >= res.data.results.limit
        }));
    }

    render() {
        return (
            <div className="HerosList">
                <form className="HerosListSearch" onSubmit={this.getHerosBySearch}>
                    <input value={this.state.search} onChange={(e) => this.setState({search: e.target.value})}
                           placeholder="Heros's name's starts with ..."/>
                    <button type="submit">Search</button>
                </form>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={() => this.getHeros(this.state.options)}
                    hasMore={this.state.hasMoreHeros}
                    loader={<div key={1} className="LoadingResults"><img style={{height:'40px'}} src={images.loading} alt="loading"/></div>}
                    useWindow={false}>
                    {
                        <div className="HerosListItems">
                            {this.state.herosList.map((c, i) =>
                                <HeroCard key={i} c={c}/>
                            )}
                        </div>
                    }
                </InfiniteScroll>
            </div>
        );
    }
}
