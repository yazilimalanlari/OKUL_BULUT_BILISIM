import { API_PROTOCOL, API_HOST, API_PREFIX, API_KEY } from './constants';
import querystring from 'querystring';

/**
 * @author Abdulbaki Zırıh
 * @param {string} uri
 * @return {json}
 */
export async function $get(uri, query = {}) {
    const seperator = uri.charAt(0) === '/' ? '' : '/';
    query = {
        ...query,
        'data.lang': 'tr'
    }
    query = querystring.encode(query);
    const url = `${API_PROTOCOL}://${API_HOST}/${API_PREFIX}${seperator}${uri}${query.length > 0 ? `?${query}` : ''}`;
    
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'authorization': `apikey ${API_KEY}`
        }
    });
    
    if (response.ok) {
        return await response.json();
    } else {
        return false;
    }
}