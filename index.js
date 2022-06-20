/**
 * @description A generic function to bind the promise callback.
 * @param {function} fn
 * @param  {...any} args
 */
 const genericFn = (fn, ...args) => {
  fn(...args)
}

/**
 * @description Creates a Promise that can be resolved or rejected remotely.
 * @returns {{
 *  promise: Promise,
 *  resolve: function,
 *  reject: function,
 * }} RemotePromise
 */
function remotePromise() {
  const remote = {}
  remote.promise = new Promise((a, b) => {
    remote.resolve = genericFn.bind(this, a)
    remote.reject = genericFn.bind(this, b)
  })
  return remote
}

module.exports = remotePromise
