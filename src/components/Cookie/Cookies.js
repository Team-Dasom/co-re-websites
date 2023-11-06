import {Cookies} from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, options) => {
 	return cookies.set(name, value, {...options}); 
}

export const getCookie = (name, value, options) => {
 return cookies.get(name, value, {...options}); 
}

export const removeCookie = (name, value, options) => {
	return cookies.remove(name, value, {...options})
}