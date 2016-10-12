function addCookie(name, val, day)
{
    var oDate = new Date();

    oDate.setDate(oDate.getDate() + day);

    document.cookie = ""+name+"="+val+";expires=" + oDate;
};
function getCookie(name)
{
    // 得到cookie
    // username=老马; password=123456
    var str = document.cookie;

    // 按照 ; 分割
    var arr = str.split("; ");
    // username=老马
    // password=123456
    for (var i = 0; i < arr.length; i++)
    {
        var arr2 = arr[i].split("=");

        // arr2[0]:  username
        // arr2[1]:  老马

        // 找名字 等于 name 所对应的值
        if (arr2[0] == name)
        {
            // 说明找到 cookie, 
            // 返回当前 cookie 所对应的值
            return arr2[1];
        }
    }
    // 如果一个都找不到，就返回 "";
    return "";
}