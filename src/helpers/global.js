/**
 * Summary: global file
 * Description: global functions file
 * @author Vikash Kumar.
 * @date  28.06.2018
 */
export const _global = {
    isEmpty
};
/*
*check if object is empty
*/
function isEmpty(_param) {
    return (_param === 'undefined' || _param === undefined || _param === '' || _param === null);
}