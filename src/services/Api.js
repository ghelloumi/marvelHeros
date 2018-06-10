import {handleErrors} from './handleError';
import {API_PUBLIC, BASE_URL, defaultOptions, hash, HEADERS, ts} from "../Constants";

export async function getCharacters(origOptions = {}) {
    const options = Object.assign(defaultOptions, origOptions);

    const currentOffset = options.page === 0 ? 0 : (options.count * (options.page - 1));

    let params = `?apikey=${API_PUBLIC}&ts=${ts}&hash=${hash}&limit=${options.count}&offset=${currentOffset}`;

    if (options.nameStartsWith) {
        params = params.concat(`&nameStartsWith=${options.nameStartsWith}`);
    }

    return fetch(`${BASE_URL}/v1/public/characters${params}`, {
        method: 'GET',
        headers: HEADERS
    })
        .then(handleErrors)
        .then(response => response.json());
}

