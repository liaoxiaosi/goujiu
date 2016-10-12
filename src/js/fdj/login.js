var ifrmLogin = {
    callback: null,
    index: null,
    pamas: null,
    login: function (callback, pamas) {
        this.callback = callback;
        this.pamas = pamas;
        this.index = layer.open({
            type: 2,
            title: ['', 'font-size:17px;background:#ffffff;border-top: 3px solid #DD3E42;border-bottom:none'],
            maxmin: false,
            shadeClose: false, //点击遮罩关闭层
            area: ['520px', '423px'],
            content: 'http://www.gjw.com/login/loginbox.aspx'
        });

    },
    close: function () {    
        if (this.callback != null && typeof (this.callback) == "function") {
            if (this.pamas != null)
                this.callback.call(null, this.pamas);
            else
                this.callback.call();
        }
        layer.close(this.index);
        onloadUser();
    }
}
function onloadUser() {
    $.ajax(
            { url: 'http://www.gjw.com/ajax/user/GetCurUserInfo.aspx',
                type: 'GET',
                async: false,
                dataType: 'jsonp',
                jsonp: 'callback',
                jsonpCallback: 'getUsrId',
                success: function (jsonData) {
                    var curUsrId = jsonData.usrId;
                    user_identity = curUsrId;
                    if (curUsrId > 0) {
                        var usrName = jsonData.userName;
                        var sHtml = '<div class="vip">' +
                            '<a href="http://www.gjw.com/user/MyOrder.aspx" class="username">' + usrName + '</a>' +
                            '<a class="quit" href="http://www.gjw.com/login/Exit.htm" target="_self" rel="nofollow">退出1</a>' +
                            '</div>';
                        $('.login').parent().html(sHtml);
                    }
                }
            }
        );

}