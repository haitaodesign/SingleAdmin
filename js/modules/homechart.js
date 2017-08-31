layui.define(['layer'],function(exports){
    var chart = {
        options:{
            title: {
                text: 'ECharts 入门示例'
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        },
        init:function(instance){
            instance.setOption(this.options);
        },
    };

    exports('homechart',chart);
});