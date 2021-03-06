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

export const API_PUBLIC = '9452d27dccc6e3330e015f48d183a66c';
export const API_PRIVATE = 'ed58ae3fec4ade96b736cb6f89b774f563c7cf08';
export const BASE_URL = 'http://gateway.marvel.com:80';

export const ts = Math.round(new Date().getTime() / 1000);
export const hash = MD5(ts + API_PRIVATE + API_PUBLIC);
export const defaultOptions = {page: 0, count: 20, name: '', nameStartsWith: ''};

