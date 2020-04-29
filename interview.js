// const _main = function () {
//     // let and var
//     // for (let i = 0; i < 3; i++) {
//     //     setTimeout(() => {
//     //         console.log("let", i)
//     //     }, 1000)
//     // }

//     // for (var i = 0; i < 3; i++) {
//     //     setTimeout(() => {
//     //         console.log("var", i)
//     //     }, 1000)
//     // }

//     // for (var i = 0; i < 3; i++) {
//     //     foo = i => {
//     //         setTimeout(() => {
//     //             console.log("var", i)
//     //         }, i * 1000)
//     //     }
//     //     foo(i)
//     // }

//     // setTimeout 闭包实现间隔 1s 输出
//     for (let i = 0; i < 4; i++) {
//         (function (j) {
//             setTimeout(function () {
//                 console.log(j)
//             }, 1000 * i)
//         })(i)
//     }
// }

// // _main()

// fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

// // Promise
// const promise = new Promise(function (resolve, rejected) {
//     console.log('Promise')
//     resolve()
// })

// promise.then(function () {
//     console.log('resolved')
// })

// console.log('hello')








// 还有一个var相关的问题


// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }

// async function async2() {
//     console.log('async2 start');
//     return new Promise((resolve, reject) => {
//         resolve();
//         console.log('async2 promise');
//     })
// }

// console.log('script start');

// setTimeout(function () {
//     console.log('setTimeout');
// }, 0);

// async1();

// new Promise(function (resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function () {
//     console.log('promise2');
// }).then(function () {
//     console.log('promise3');
// });

// console.log('script end');

// const a = (function () {
//     let num = 2
//     return function () {
//         if (num === 1) {
//             num = 2
//         } else {
//             num = 1
//         }
//         return num
//     }
// })()

const log = console.log.bind(console)

// log(a())
// log(a())
// log(a())
// log(a())
// log(a())


class Scheduler {
    constructor() {
        this.task = []
        this.usingTask = [] // 正在运行的任务
    }

    add(promiseCreator) {
        return new Promise((resolve, reject) => {
            promiseCreator.resolve = resolve
            if (this.usingTask.length < 2) {
                this.usingRun(promiseCreator)
            } else {
                this.task.push(promiseCreator)
            }
        })
    }

    usingRun(promiseCreator) {
        this.usingTask.push(promiseCreator)
        promiseCreator().then(() => {
            promiseCreator.resolve()
            this.usingMove(promiseCreator)
            if (this.task.length > 0) {
                this.usingRun(this.task.shift())
            }
        })
    }

    usingMove(promiseCreator) {
        let index = this.usingTask.findIndex(promiseCreator)
        this.usingTask.splice(index, 1)
    }
}
const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})
const scheduler = new Scheduler();
const addTask = (time, order) => {
    scheduler.add(() => timeout(time))
        .then(() => console.log(order))
}

// addTask(1000, '1')
// addTask(500, '2')
// addTask(300, '3')
// addTask(400, '4')
// output: 2 3 1 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4















// let a = []

// for (var i = 0; i < 3; i++) {
//     var f = (function (i) {
//         log(i)
//     })()
//     a.push(f)
// }

// log(a)
// a[0]()
// a[1]()
// a[2]()

































// const numOfString = function(str) {
//     count = {}

//     for(let i = 0; i < str.length; i++){
//         let c = str[i]
//         if (count[c] != undefined) {
//             count[c]++
//         } else {
//             count[c] = 1
//         }
//     }

//     return count
// }

// console.log(numOfString('aaabbb'))

// const isValid = function(s) {
//     let stack = []
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
//             stack.push(s[i])
//         } else if (s[i] === ')') {
//             if (stack[stack.length - 1] === '(') {
//                 stack.pop()
//             } else {
//                 return false
//             }
//         } else if (s[i] === ']') {
//             if (stack[stack.length - 1] === '[') {
//                 stack.pop()
//             } else {
//                 return false
//             }
//         } else {
//             if (stack[stack.length - 1] === '{') {
//                 stack.pop()
//             } else {
//                 return false
//             }
//         }
//     }
//     if (stack.length == 0) {
//         return true
//     }
//     else{
//         return false
//     } 
// }

// const log = console.log.bind(console)

// log(isValid('()'))
// log(isValid('({)'))
// log(isValid('({})'))
// log(isValid('{{{()}}}[]'))


// const arrayDepth = function (arr) {
//     let depth = 1
//     let max = 0
//     for (let a of arr) {
//         if (a instanceof Array) {
//             d = arrayDepth(a)
//             if (d > max) {
//                 depth += d
//                 max = d
//             }
//         }
//     }
//     return depth
// }

// const log = console.log.bind(console)

// let arr = []
// log(arrayDepth(arr))

// for (let a of arr) {
//     log(a)
//     if (a instanceof Array) {
//         log('array')
//     } else {
//         log('not array')
//         log(typeof(a))
//     }
// }

const tickQueue = function () {
    let num = 0
    let start = Date.now()

    setInterval(function () {
        num++
        let now = Date.now()
        log('timer1', num, now - start)
        if (num == 10) {
            throw Error('timeout')
        }
    }, 1024)

    setTimeout(function () {
        num++
        let now = Date.now()
        log('timer2', num, now - start)
    }, 0)
}

// tickQueue()