import { API_PROTOCOL, API_HOST, API_PREFIX, SECRET_API_KEY } from './constants';
import querystring from 'querystring';
import { TextDecoder } from 'text-encoding';

/**
 * @author Abdulbaki Zırıh
 * @param {string} uri
 * @return {json}
 */
export async function $get(uri, query = {}) {
    const seperator = uri.charAt(0) === '/' ? '' : '/';
    query = querystring.encode(query);
    const url = `${API_PROTOCOL}://${API_HOST}/${API_PREFIX}${seperator}${uri}${query.length > 0 ? `?${query}` : ''}`;
    
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'user-key': new TextDecoder().decode(new Uint8Array(SECRET_API_KEY.split(',')))
        }
    });
    
    if (response.ok) {
        return await response.json();
    } else {
        return false;
    }
}