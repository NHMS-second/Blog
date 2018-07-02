// 原文地址：史上最易读懂的 Promise/A+ 完全实现 https://zhuanlan.zhihu.com/p/21834559
/**
 * Promise标准解读：
 * 1. 只有一个then方法，没有catch,race,all等方法，甚至没有构造函数
 * 2. then方法返回一个新的Promise.
 * 3. 不同Promise的实现需要可以互相调用interoperable.
 * 4. Promise的初始状态为pending, 它可以由此状态转换为fulfilled或者rejected，一旦状态确定，就不可以再转换为其他状态，状态确定的过程称为settle.
 */

// 一步一步实现Promise
/**
 * 构造函数
 * @param {*} executor
 * onResolvedCallback: Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
 * onRejectedCallback: Promise reject 时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
 */
function Promise(executor) {
    // 在一个靠谱的实现里，构造出的Promise对象的状态和结果应当是无法从外部更改的。
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
 * 每个Promise对象都可以在其上多次调用then方法，而每次调用then返回的Promise的状态取决于那一次调用then时传入参数的返回值
 * 所以then不能返回this,因为then每次返回的Promise的结果都有可能不同。
 */
Promise.prototype.then = function(onResolved, onRejected) {
    let self = this
    let promise2

    // 根据标准，如果then的参数不是function,则我们需要忽略它，此处以如下方式处理
    onResolved = typeof onResolved === 'function' ? onResolved : function(v) {}
    onRejected = typeof onRejected === 'function' ? onRejected : function(r) {}

    if (self.status === 'resolved') {
        // 如果promise1(此处即为this/self)的状态已经确定并且是resolved，我们调用onResolved
        // 因为考虑到有可能throw，我们将其包在try/catch
        return promise2 = new Promise(function(resolve, reject) {
            try {
                let x = onResolved(self.data)
                if (x instanceof Promise) {
                    // 如果onResolved的返回值是一个Promise对象，直接取它的结果作为promise2的结果
                    x.then(resolve, reject)
                }
                // 否则，以它的返回值作为promise2的结果
                resolve(x)
            } catch (error) {
                // 如果出错，以捕捉到的错误作为Promise2的结果
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
        // 如果当前的Promise还处于pending状态，我们并不能确定调用onResolved还是rejected
        // 只能等到Promise的状态确定后，才能确实处理
        // 所以我们需要把我们的两种情况的处理逻辑作为callback放入promise1(此时为this/self)的回调函数组里
        // 逻辑本身与第一个if块内的几乎一致
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