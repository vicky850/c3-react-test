import { alertConstants } from '../constants';
/**
 * Summary: alert actions
 * Description: handle all sort of alert actions
 * @author Vikash Kumar.
 * @date  28.06.2018
 */
export const alertActions = {
    success,
    error
};
//success alert
function success(response) {
    return { type: alertConstants.SUCCESS, data: response.data};
}
//error alert
function error(message) {
    return { type: alertConstants.ERROR, message };
}
