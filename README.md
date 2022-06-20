
# promise-remotely

## Create native ES6 promises that can be resolved or rejected externally.

A simple and powerful Promise package that give to you capability to remote resolve/reject a promise.


  

# Getting Started

  
### First of all install the package
```shell

npm i promise-remotely

```

 
### Then import the package

  

```javascript
import PromiseRemotely from  'promise-remotely'
```

#### Create a Instance of a remote promise  
```javascript
const sampleRemotePromise  =  PromiseRemotely()
```

#### To remotely solve the promise
```javascript
sampleRemotePromise.resolve()
```

#### To remotely reject the promise
```javascript
sampleRemotePromise.reject()
```

#### You can either pass a result object
```javascript
sampleRemotePromise.resolve({  status:  200  })
```

#### How await the remote promise
```javascript
const result = await sampleRemotePromise.promise
```
