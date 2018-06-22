/**
 * 构造函数
 * @param {*} executor 
 */
function Promise(executor) {
    let self = this
    self.status = 'pending'
    self.data = undefined
    self.onResolvedCallback = []
    self.onRejectedCallback = []

    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'resolved'
            self.data = value
            for (let i = 0; i < self.onResolvedCallback.length; i++) {
                self.onResolvedCallback[i](value)
            }
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.status = 'rejected'
            self.data = reason
            for (let i = 0; i < self.onRejectedCallback.length; i++) {
                self.onRejectedCallback[i](reason)
            }
        }
    }

    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

/**
 * then方法接收两个参数, 返回值是一个 new Promsie
 * @param {*} onResolved：Promise成功后的回调 
 * @param {*} onRejected：Promise失败后的回调
 * @returns: new Promise
 */
Promise.prototype.then = function(onResolved, onRejected) {
    let self = this
    let promise2

    onResolved = typeof onResolved === 'function' ? onResolved : function(v) {}
    onRejected = typeof onRejected === 'function' ? onRejected : function(r) {}

    if (self.status === 'resolved') {
        return promise2 = new Promise(function(resolve, reject) {
            try {
                let x = onResolved(self.data)
                if (x instanceof Promise) {
                    x.then(resolve, reject)
                }
                resolve(x)
            } catch (error) {
                reject(error)
            }
        })
    }

    if (self.status === 'rejected') {
        return promise2 = new Promise(function(resolve, reject) {
            try {
                let x = onRejected(self.data)
                if (x instanceof Promise) {
                    x.then(resolve, reject)
                }
            } catch (error) {
                reject(error)
            }
        })
    }

    if (self.status === 'pending') {
        return promise2 = new Promise(function(resolve, reject) {
            self.onResolvedCallback.push(function(value) {
                try {
                    let x = onResolved(self.data)
                    if (x instanceof Promise) {
                        x.then(resolve, reject)
                    }
                } catch (error) {
                    reject(error)
                }
            })

            self.onRejectedCallback.push(function(reason) {
                try {
                    let x = onRejected(self.data)
                    if (x instanceof Promise) {
                        x.then(resolve, reject)
                    }
                } catch (error) {
                    reject(error)
                }
            })
        })
    }
}

Promise.prototype.catch = function(onRejected) {
    return this.then(null, onRejected)
}