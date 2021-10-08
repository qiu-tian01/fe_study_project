/*
 * @author: qiutian
 * @Date: 2021-10-02 09:33:17
 * @Description: Do not edit
 * @params: Do not edit
 */

import a from "./components/a.js";
import b from "./components/b.js";
import tsTest from './components/c.ts'


function test() {
    let a = 'a'
    console.log('hello world', `hello ${a}`)
}

export class Test {
    constructor() {
        test: 111
    }

    log() {
        console.log(`hello rollup`)
    }
}

a()
test()
let c = tsTest()