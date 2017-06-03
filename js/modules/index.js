layui.config({
    base: '/js/modules/'
}).use(['element', 'layer'], function() {
    var element = layui.element(),
        $layui_elem_quote = $('.layui-elem-quote'),
        $layui_body_container = $('.layui-body-container');
    //监听导航事件,获取导航数据
    element.on('nav(nav)', function(element) {
        var $element = $(element),
            navtitle = $element.text(),
            url = $element.children().data().url;
        console.log(url);
        if (navtitle !== "") {
            $layui_elem_quote.text(navtitle);
            ajaxhtml(url);
        } else {
            return;
        }
    });

    function ajaxhtml(url) {
        $layui_body_container.html("");
        if (url === "" || undefined) return;
        //显示加载loading动画
        layer.load(2);
        //请求成功，关闭loading动画
        $layui_body_container.load(url, function(response, status, xhr) {
            if (status === "success") {
                layer.closeAll('loading');
            } else if (status === "error") {
                layer.closeAll('loading');
                layer.msg("加载失败，请检查网络链接是否正常！");
            }
        });
    }

});