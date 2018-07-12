/**
 * Summary: auth header
 * Description: prepare authentication header of all requests 
 * @author Vikash Kumar.
 * @date  28.06.2018
 */
import { Md5 } from 'ts-md5';
import { _global } from './global';

/**
* Description: returns header params to the request
* @param {string} username
* @param {string} password
* @return {object} Content-Type, charset, Accept, Authorization
*/
function authHeader(username, password) {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user["access-token"]) {
        return { 'Authorization': 'Bearer ' + user["access-token"] };
    } else {
        if (!_global.isEmpty(username) && !_global.isEmpty(password)) {
            //credentials with base64 and md5 hash format
            let userdata = "Basic " + window.btoa(username + ":" + Md5.hashStr(password));
            return { 'Content-Type': 'application/json; charset=utf-8', 'Accept': 'application/json', 'Authorization': userdata };
        }
        return true;        //return false in case authentication needs to be implemented
    }
}

export { authHeader };