function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/*
 * @author: qiutian
 * @Date: 2021-10-02 09:33:17
 * @Description: Do not edit
 * @params: Do not edit
 */
function a() {
  console.log("\u8FD9\u662Fa\u6587\u4EF6");
}

function test() {
  var a = 'a';
  console.log('hello world', "hello ".concat(a));
}

var Test = /*#__PURE__*/function () {
  function Test() {
    _classCallCheck(this, Test);
  }

  _createClass(Test, [{
    key: "log",
    value: function log() {
      console.log("hello rollup");
    }
  }]);

  return Test;
}();
a();
test();

export { Test };
