import {
  customErrorConst,
  httpErrorConst,
  validCodes
} from "../constants";

import { alertActions } from ".";

/**
 * Summary: response action
 * Description: handle all responses of api calls at one place ( for error handling etc)
 * @author Vikash Kumar.
 * @date  28.06.2018
 */

export const responseActions = {
  handleResponse,
  errorResponse,
  successResponse
};

/**
 * Description: Get the type and its message
 * @param {object}  response
 * @return {object}
 */
function handleResponse(response) {
  try {
    let httpStatusCode;

    if (response) {
      httpStatusCode = response["status"];
      if (validCodes(httpStatusCode)) {
        return successResponse(response.data);
      }
      return errorResponse(httpStatusCode ? httpErrorConst[httpStatusCode] : response);
    }
    
  } catch (e) {
    return errorResponse(customErrorConst.ERROR_DEFAULT);
  }
}

/**
 * Description: Get the error message
 * @param {string}   errorMessage
 * @return {object}
 */
function errorResponse(errorMessage) {
  let errorMsg = errorMessage
    ? errorMessage
    : customErrorConst.ERROR_DEFAULT;
  return alertActions.error(errorMsg);
}

/**
 * Description: Get the success message
 * @param {string}   res
 * @return {object}
 */
function successResponse(res) {
  return alertActions.success(res);
}
