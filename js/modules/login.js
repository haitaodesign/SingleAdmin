layui.use(['element','form','layer'],function(){
    var element = layui.element,
        $ = layui.$,
        form=layui.form;

        /**
         * 登录表单验证
         */
        form.verify({
            username: function(value, item){ //value：表单的值、item：表单的DOM对象
              if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
                return '用户名不能有特殊字符';
              }
              if(/(^\_)|(\__)|(\_+$)/.test(value)){
                return '用户名首尾不能出现下划线\'_\'';
              }
              if(/^\d+\d+\d$/.test(value)){
                return '用户名不能全为数字';
              }
            }
            //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
            ,password: [
              /^[\S]{6,12}$/
              ,'密码必须6到12位，且不能出现空格'
            ] 
          });
        
        // 监听表单提交事件
        form.on('submit(login)',function(data){
          var params = data.field;
          
          //验证密码，ajax请求服务器数据进行验证，此处为模拟登录
          if(params.username=='admin' && params.password=='123456'){
                // 验证cookie正确后跳转
                window.location.href="/index.html"
          }
          return false;
        });
});