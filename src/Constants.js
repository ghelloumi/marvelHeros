import background from './images/background.jpg';
import marvel from './images/Marvel.png';
import iconClose from './images/icons/ico_close@10x.png';
import backArrow from './images/icons/backArrow.png';
import loading from './images/icons/loading.gif'
import {MD5} from "./services/Utils";

export const images = {
    background,
    marvel,
    iconClose,
    backArrow,
    loading
};

export const HEADERS = {
    'Accept': '*/*'
};

export const API_PUBLIC = 'b1954699cdd7ee3b047cba675152a9b2';
export const API_PRIVATE = '25ff43feb8b0c57affc8da9fb1098c0aa488a223';
export const BASE_URL = 'http://gateway.marvel.com:80';

export const ts = Math.round(new Date().getTime() / 1000);
export const hash = MD5(ts + API_PRIVATE + API_PUBLIC);
export const defaultOptions = {page: 0, count: 20, name: '', nameStartsWith: ''};

