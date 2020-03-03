HTML 部分
localStorage 和 cookies
// localStorage、 sessionStorage 与 cookies 的区别
// localStorage 可以用来在同网站 a 页面和 b 页面之间通信,
// 结合 storage 事件使用, 不懂这个事件可以看看 MDN 的文档

FormData
// 上传文件需要用到这个对象
// 假如页面中有一个
// <input type="file" id="input-file">
// 上传之后可以通过下面的方式获取上传的文件
var file = e('#input-file').files[0]
// new 一个 FormData 对象
var fd = new FormData()
// 将上传的 file 添加到 fd 对象中
// 其中 avatar 字段是和后端约定好的
fd.append('avatar', file)
// 往 fd 里面添加 file 之后, 就可以在下面使用了

// 上传文件的套路
// url 是上传的 api 路径
var upload = function (url, fd) {
    var request = {
        url: url,
        method: 'post',
        data: fd,
        // 注意, 下面两行是上传文件的套路
        contentType: false,
        processData: false,
        success: function (r) {
            log('上传成功', r)
        },
        error: function (e) {
            log('上传失败', e)
        }
    }
    $.ajax(request)
}

File API
// File 和 createObjectURL 结合使用可以用来预览图片
https: //developer.mozilla.org/zh-CN/docs/Web/API/File/Using_files_from_web_applications



    CSS 部分
float
position
display
两栏布局
水平居中
垂直居中




JS 部分
值类型与引用类型
//
var a = {
    v: 1
}
var b = a
console.log(b.v)

a.v = 2
console.log(b.v)

a = {
    v: 3
}
console.log(b.v)




变量声明提升
//
console.log(a)
var a = 1

console.log(b())

function b() {
    return 2
}

console.log(c())
var c = function () {
    return 3
}

// 注意，let 或者 const 声明的变量不具备声明提升的特性
console.log(d)
let d = 4




this
//

// 简单的 this 题目
var x = 0

function test() {
    console.log(this.x)
}
var o = {}
o.x = 1
o.m = test
o.m.apply()


// 复杂的 this 题目
var foo = {
    bar: function () {
        return this.baz
    },
    baz: 1,
};
(function () {
    return typeof arguments[0]()
})(foo.bar)



//
function Foo() {
    this.name = 'a'
}

var f1 = new Foo()
f1.name = 'b'
console.log(f1.name)

var f2 = new Foo()
console.log(f2.name)



prototype
原型链
//
function Foo() {
    this.name = 'a'
}

Foo.prototype.logName = function () {
    console.log('name is', this.name)
}

var f1 = new Foo()
f1.logName()

var f2 = new Foo()
f2.logName = function () {
    console.log('name')
}
f2.logName()

var f3 = new Foo()
f3.name = 'c'
f3.logName()



arguments
    //
    (function () {
        return typeof arguments
    })()




call, apply, bind
// call, apply 和 bind 的区别

setTimeout 和 setInterval
// 两者的区别

setTimeout 与循环结合
//
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(new Date(), i)
    }, 1000)
}

console.log(new Date(), i)




事件冒泡, 事件捕获, 事件委托
// 讲清楚这三个概念

闭包
// 使用闭包实现如下程序
// 函数每调用一次，该函数的返回值加 1
// var a = function() {
//     let i = 0
//     var b = function () {
//         return i += 1
//     }
//     return b
// }
// var result = a()
// result()
clone 和 deepClone
// 实现 clone 和 deepClone 函数
// JSON.stringify 和 JSON.parse 可以应付大部分情形

ajax（ 可能需要手写原生的 ajax）
// 实现原生的 ajax 函数
// 0 1 2 3 4 各代表什么含义
const ajax = function (method, data, url, callback) {
    var r = new XMLHttpRequest()
    r.open(method, data, true)
    // r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = () => {
        if (r.readyState === 4) {
            callback(r.response)
        }
    }
    r.send()
}

HTTP 请求方法, 常见状态码, 头部常见字段
// HTTP 有哪些常见请求方法
// HTTP 常见状态码有哪些
// HTTP 头部常见字段有哪些

跨域（ jsonp, postMessage, cors, 用服务器(比如 node) 转发请求和响应）
// 跨域有哪些常见的解决方式

网络安全: xss, xsrf
// xss 和 xsrf 的原理是什么

DOM 操作（ 查找, 添加, 删除, 修改）
// DOM 查找/添加/删除/修改对应的 API 是什么

jQuery 常见 API
// jQuery 常见 API




数据结构
数组
对象
队列
栈
数组、 对象、 字符串的想换转化
比如 a = 1 & b = 2 & c = 3 怎样转成对象, 复习基础课程的作业就可以
// 有这样一个 url： http://vip.qq.com/a.php?a=1&b=2&c=3&d=xxx&e
// 写一段 JS 程序将 url 的参数转成对象的形式
{
    a: 1,
    b: 2,
    c: 3,
    d: 'xxx',
    e: '',
}




ES6
http: //es6.ruanyifeng.com/

    ES6 的面试题一般是概念性质的, 所以清楚下面的概念就可以了
let 和
const, 有一个 TDZ（ 暂时性死区的概念， 了解下即可）
箭头函数
解构
剩余参数
Promise, 可能会附带 async await
class
Set




React
http: //www.ruanyifeng.com/blog/2016/09/react-technology-stack.html

    // React 也是概念性质的题目为主, 基本上不会考察写代码
    React Angular Vue 这三个一般只会一个就可以的, 所以这里只说 React 的情况
react 的广告
virtual dom
diff 算法的原理
state 和 props
组件生命周期
组件通信： 父组件 - > 子组件, 子组件 - > 父组件, A 组件 - > B 组件
React Router（ react 路由）
Redux / MobX
react ui 有两套很流行: Material UI 和 Ant Design, 国内流行的是 Ant Design

material ui: https: //material-ui.com
    ant design: https: //ant.design/index-cn