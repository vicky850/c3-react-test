/**
 * Summary: define all uri constants
 * Description: define all uri constants
 * @author Vikash Kumar.
 * @date  28.06.2018
 */

export const API_DIRECTORY = { DOC_ROOT: "/api" }

export const urlConstants = {
    BASE_URL: window.BASE_URL + API_DIRECTORY.DOC_ROOT
};
export const API_INTERFACE = {
    GET_USERS: "/users"
}
export const uriConstants = {
    GET_USERS: urlConstants.BASE_URL + API_INTERFACE.GET_USERS
}
