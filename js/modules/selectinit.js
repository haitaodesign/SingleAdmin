layui.define('layer',function(exports){

    var selectObj = {
        // 部门option
        fordeptoption:function(data,isall){
            var optionstr = "<option value='0'>请选择</option>";
            for (var i = 0; i < data.length; i++) {
               var optionone="<option value='"+data[i].departmentid+"'>"+data[i].department+"</option>"   
               optionstr+=optionone;
            }
            return optionstr;
        },
        // 分组option
        forgrouoption:function(data,isall){
            var optionstr ="";
            if(isall){
                optionstr += "<option value='0'>全部</option>";
            }

            for (var i = 0; i < data.length; i++) {
               var optionone="<option value='"+data[i].groupid+"'>"+data[i].group+"</option>"   
               optionstr+=optionone;
            }
            return optionstr;
        },
        // 填充部门
        selectdeptoption:function($dept,url,param,form){
            //
            $.get(url,param,function(data){
                var dataoption=data.data;
                var optionstr= selectObj.fordeptoption(dataoption);
                $dept.append(optionstr);
                form.render('select');
            });
        },
        // 填充分组
        selectgrouption:function($dept,url,param,form,isall){
            $.get(url,param,function(data){
                var dataoption=data.data;
                var optionstr= selectObj.forgrouoption(dataoption,isall);
                $dept.empty();
                $dept.append(optionstr);
                form.render('select');
            });
        },
        // 职位option
        forstatoption:function(data){
            var optionstr = "";
            for (var i = 0; i < data.length; i++) {
                var optionone="<option value='"+data[i].stationId+"'>"+data[i].station+"</option>"   
                optionstr+=optionone;
            }
            return optionstr;
        },
        // 填充分组
        selectstatoption:function($dept,url,param,form){
            $.get(url,param,function(data){
                var dataoption=data.data;
                var optionstr= selectObj.forstatoption(dataoption);
                $dept.empty();
                $dept.append(optionstr);
                form.render('select');
            });
        },


        
    };

    exports('selectinit',selectObj);

});