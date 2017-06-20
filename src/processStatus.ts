/**
 * window.fetch does not error on non-200 status codes.
 * Chain this method as the first promise.then
 *
 * @param response Response
 *
 */
export const processStatus = (response: Response) => {
    if (response.status === 200 || response.status === 0) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
};
