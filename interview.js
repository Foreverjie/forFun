const _main = function() {
    // let and var
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log("let", i)
        }, 1000)
    }

    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log("var", i)
        }, 1000)
    }

    for (var i = 0; i < 3; i++) {
        foo = i => {
            setTimeout(() => {
                console.log("var", i)
            }, i * 1000)
        }
        foo(i)
    }

    // setTimeout 闭包实现间隔 1s 输出
    for (let i = 0; i < 4; i++) {
        ;(function(j) {
            setTimeout(function() {
                console.log(j)
            }, 1000 * i)
        })(i)
    }
}

_main()
