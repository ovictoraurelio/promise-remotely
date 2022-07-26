export = remotePromise;
/**
 * @description Creates a Promise that can be resolved or rejected remotely.
 * @returns {{
 *  promise: Promise,
 *  resolve: function,
 *  reject: function,
 * }} RemotePromise
 */
declare function remotePromise(): {
    promise: Promise<any>;
    resolve: Function;
    reject: Function;
};