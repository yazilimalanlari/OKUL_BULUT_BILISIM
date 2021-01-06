import {
    SETTINGS_TOGGLE_HEADER_MENU,
    SETTINGS_GET_WEATHER
} from '@redux/types';
import { $get } from '@app/api';

export const toggleHeaderMenu = () => dispatch => dispatch({
    type: SETTINGS_TOGGLE_HEADER_MENU
});

export const getWeather = () => async dispatch => {
    const { city, result }= await $get('getWeather', { 'data.city': 'İstanbul' });
    dispatch({
        type: SETTINGS_GET_WEATHER,
        payload: `${city} Hava Durumu: ${result[0].description.charAt(0).toLocaleUpperCase('tr-TR') + result[0].description.slice(1)}`
    });
}