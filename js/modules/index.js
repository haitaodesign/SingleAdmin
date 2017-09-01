layui.config({
    version:false, 
    debug:false,
    base:'/js/modules/'
}).use(['element','layer','ajaxhtml'], function(){
    var element = layui.element,
        $ = layui.$;
    var ajaxhtml = layui.ajaxhtml;
    //应该将一些公共的模块抽离出去，目前现考虑实现功能
    element.on('nav(nav)',function(element){
        var $element = $(element),
        addurl=$element.children().data().url;
        //添加面包屑导航
        addBreadcrumb($element);

        ajaxhtml.pageLoad(addurl);
        // ajaxhtml(addurl);
        
    });

    /**
     * 添加面包屑导航
     * @param {*传入被点击菜单的jquery对象}  
     */
    function addBreadcrumb($element){
        var navtitle = $element.text(),
        localname = $element.context.localName;
        $layui_breadcrumb = $('.layui-breadcrumb');
        if(localname==='li'){
            $layui_breadcrumb.html("<a href='javascript:;'>"+navtitle+"</a>")
        }else if(localname === 'dd'){
            var bdarr=[],bdstr;
            var curtext=$($element.parent().parent().children()[0]).text();
            bdarr.push(curtext);
            bdarr.push(navtitle);
            for (var i = 0,len=bdarr.length; i < len; i++) {
                bdstr+="<a href='javascript:;'>"+bdarr[i]+"</a>";
            }
            $layui_breadcrumb.html(bdstr);
            element.init();
        }
    }
    /**
     * 初始化首页内容加载
     */
    (function initHome(){
        // 获取点击菜单上的链接
        var $layui_nav_one = $('.layui-nav-tree').children()[0],
            one_url = $($layui_nav_one).children().data().url;
        if (one_url !== "") {
                // ajaxhtml(one_url);
            ajaxhtml.pageLoad(one_url);
        }
    })();


    /**
     * 密码修改 
     */
});