/**
 * Summary: error constants
 * Description: error constants
 * @author Vikash Kumar.
 * @date  28.06.2018
 */
export const customErrorConst = {
    ERROR_DEFAULT: 'Unable to perform this action. Please try later!'
}
export const httpErrorConst = {
    500 : "Internal Server Error."
};
//check valid reponse codes 
export const validCodes=(code)=>{
    if(code>=200 && code<402){
        return true;
    }
    return false;
}
