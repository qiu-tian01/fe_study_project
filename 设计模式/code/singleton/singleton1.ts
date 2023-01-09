// 最简单的单例
const SingleTon1 = function (name) {
  this.name = name;
};

SingleTon1.prototype.instance = null;
SingleTon1.prototype.getName = function () {
  alert(this.name);
};

SingleTon1.prototype.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new SingleTon1(name);
  }
  return this.instance;
};

// 透明的单例模式
const CreateDiv = () => {
  let instance;
  const createDiv = (html) => {
    if (instance) {
      return instance;
    }
    this.html = html;
    this.init();
    return (instance = this);
  };

  CreateDiv.prototype.init = () => {
    const div = document.createElement("div");
    div.innerHTML = this.html;
    document.body.appendChild(div);
  };

  return createDiv;
};

// 使用类来实现单例模式
class SingleItem {
  static instance;

  show() {
    console.log("我是一个单例");
  }

  static getInstance() {
    return SingleItem.instance || (SingleItem.instance = new SingleItem());
  }
}

const s1 = SingleItem.getInstance();
const s2 = SingleItem.getInstance();

console.log(s1 === s2);
// true

// 惰性单例
// 在创建的时候才创建对象实例
// 通用的惰性单例

const getSingle = (fn) => {
  let result;
  return function () {
    return result || (result = fn.apply(this, arguments));
  };
};

const createIframe = getSingle(function () {
  let iframe = document.createElement("iframe");
  document.body.appendChild(iframe);
  return iframe;
});

const iframe = createIframe();
iframe.src = "www.baidu.com";
