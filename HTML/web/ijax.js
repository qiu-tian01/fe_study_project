/*
 * @author: qiutian
 * @Date: 2022-06-10 15:45:28
 * @Description: iframe进行跨域请求
 * @params: Do not edit
 */
/**
 * 
 * @param {*} url : 接口地址
 * @param {*} data : 请求参数
 * @param {*} cb : 成功回调
 * @param {*} errcb : 失败回调
 */
export function ijax(url, data, cb, errcb) {
    var body = document.getElementsByTagName("body")[0];
    // suffix 定义唯一标识
    var suffix = Math.abs((new Date()).getTime()) + '_' + Math.round(Math.random() * 1e8);
    var id = "ijax_iframe_" + suffix;
    // 动态添加iframe并设置iframe样式
    var ifm = document.createElement("iframe")
    ifm.style.height = '0px';
    ifm.style.position = 'absolute';
    ifm.style.top = '-9999px';
    ifm.style.overflow = 'hidden';
    ifm.style.display = "none";
    ifm.name = id;
    ifm.id = id;
    ifm.frameborder = 0;
    // 添加input用于form通信
    data.callback = 'ijax_' + suffix;
    var inputHtml = (function(data) {
        var html = [];
        for (var name in data) {
            if (name != 'file_el') {
                var val = data[name];
                html.push('<textarea type="hidden" name="' + name + '" >' + val + '</textarea>');
            }
        }
        return html.join('');
    })(data);

    var mmss = data.file_el ? 30000 : 6000;
    var timer = setTimeout(function() {
        errcb && errcb({ status: { code: 400, msg: "timeout" } });
        window['ijax_' + suffix] = null;
        body.removeChild(ifm);
        if (!data.file_el) {
            body.removeChild(form);
        } else {
            body.removeChild(form);
        }
        clearTimeout(timer);
    }, mmss);

    window['ijax_' + suffix] = function(msg) {
        if (typeof cb === 'function') {
            if (msg.result && msg.result.data && msg.result.data.code == '10011') {
                this.window.location.href = 'http://' + msg.result.data.url
            } else {
                cb(msg);
            }
        }
        clearTimeout(timer);
        setTimeout(function() {
            body.removeChild(ifm);
            if (!data.file_el) {
                body.removeChild(form);
            } else {
                body.removeChild(form);
            }
        }, 1e3);
    };

    var form = document.createElement("form");
    form.style.height = '0px';
    form.style.position = 'absolute';
    form.style.top = '-9999px';
    form.style.display = "none";
    form.method = "post";
    form.action = url + "?callback=" + 'ijax_' + suffix;
    form.target = id;
    form.innerHTML = inputHtml;
    body.appendChild(ifm);
    if (data.file_el) {
        var el = data.file_el;
        form.enctype = "multipart/form-data";
        form.encoding = "multipart/form-data";
        body.appendChild(form);
        form.appendChild(el.cloneNode(true));
    } else {
        body.appendChild(form);
    }
    form.submit();
}