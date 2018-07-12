/**
 * Summary: user action
 * Description: User Actions which intracts with services or perform some sort of action
 * @author Vikash Kumar.
 * @date  28.06.2018
 */
import { baseService } from '../services/baseService';
import { authHeader } from '../helpers/auth-header';
import { uriConstants } from '../constants/uri.constants';
import { responseActions } from './response.actions';
/**
* Description: User Actions  would be exposed so it can be accessed outside
* @param {null}
* @return {null}
*/
export const userActions = {
    getUsers
};

/**
 * Description: Get the list of users from API call on the basis of offset and limit
 * @param {number}   offset
 * @param {number}   limit
 * @return {object} 
 */
async function getUsers(offset, limit) {
    try {
        let url = uriConstants.GET_USERS + `?page=${offset}&per_page=${limit}`;
        let response = await baseService.get(url, authHeader()).then(
            req_response => {
                return responseActions.handleResponse(req_response);
            },
            error => {
                return responseActions.handleResponse(error);
            }
        );
        return response;
    } catch (e) {
        return responseActions.errorResponse(e);
    }
}