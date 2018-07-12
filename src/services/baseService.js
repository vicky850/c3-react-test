/**
 * Summary: service class
 * Description: execution of all crud operations api
 * @author Vikash Kumar.
 * @date  28.06.2018
 */

import axios from 'axios';
import { validCodes } from '../constants/error.constants';
export const baseService = {
    get
};
export const methodType = {
    get: "GET"
};
//===========CRUD Operations=====================//

//Get Call
function get(url, header, body) {
    return axios.get(url, { headers: { Authorization: header.Authorization } }).then(handleResponse).catch(error);
}

//callback of response (returns promise)
function handleResponse(response) {
    if (!validCodes(response.status)) {
        return Promise.reject(response);
    }
    return response;
}

//callback of error
function error(error) {
    return error;
}


