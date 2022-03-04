/*
 * @author: qiutian
 * @Date: 2021-10-31 22:05:00
 * @Description: 发布订阅模式
 * @params: Do not edit
 */


class PubSub {
    constructor() {
        this._events = []
    }
    subscribe(event, callback) {
        // 判断_event 队列中是否注册过event
        if (this._events[event]) {
            this._events[event].push(callback)
        } else {
            this._events[event] = [callback]
        }
    }

    //发布
    publish(event, ...args) {
        if (this._events[event] && this._events[event].length) {
            this._events[event].forEach(function (callback) {
                callback.call(this, ...args)
            });
        }
    }

}


let pub = new PubSub()

pub.subscribe('事件一', () => {
    console.log(`事件1执行`)
})

pub.subscribe('事件一', () => {
    console.log(`事件1执行2`)
})

pub.publish('事件一')