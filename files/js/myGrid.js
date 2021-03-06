(function($) {
    
    $.fn.myGrid = function(options) {
        if(arguments.length===0||typeof arguments[0]=== 'object'){
            var option=arguments[0],
                data=this.data('myGrid'),
                options=$.extend({},$.fn.myGrid.defaults,option);
            if(!data){
                data=new MYGrid(this,options);
                this.data('myGrid',data)
            }
            return $.extend(true,this,data)
        }
    }
    //默认参数
    $.fn.myGrid.defaults={
        width:'100px',
        nodatatext:'no data',
        data:[],
        columns:[],
        className:'table table-bordered'
    }
    var MYGrid=function(element,options){
        this.opts=options;
        this._tableLayout($(element));
    }

    $.fn.myGrid.constructor=MYGrid;
    //私有方法
    MYGrid.prototype={
        _getColumn:function(){

        },
        _tableLayout:function($ele){
            var opts=this.opts;
            var html=[
                '<div class="myGrid">',
                    '<table class="'+opts.className+'" width="'+opts.width+'">',
                    this._tableHead(),
                    this._tableBody(),
                    '</table>',
                    this._tableNoData()
            ]
            $ele.html(html.join(''))
            
            return this;
        },
        _tableHead:function(){
            var opts=this.opts,
                columns=opts.columns,thead=ths='';
                var userAgent = window.navigator.userAgent.toLowerCase(),
                    isWeixin = userAgent.indexOf('micromessenger') !== -1;
                if(isWeixin){
                    $('.table').css('color','red')
                }
                for(var i=0;i<columns.length;i++){
                    if(columns[i].text){
                        ths+='<th>'+columns[i].text+'</th>';
                    }else{
                        ths+='<th>'+columns[i].datafield+'</th>';
                    }
                };
                thead='<thead><tr><th rowspan="2">姓名</th><th colspan="2">性别</th></tr><tr><th>性别</th><th>成绩</th></tr></thead>'
                
            
            return thead;
        },
        _headDeep:function(){
            var deep;
        },
        _tableBody:function(){
            var opts=this.opts,
                columns=opts.columns,
                rows=['<tbody>'];
            if(opts.data.length){
                for(var i=0; i<opts.data.length;i++){
                    var item = opts.data[i];
                    rows.push('<tr>');
                    for(var j=0;j<columns.length;j++){
                        if(columns[j].datafield in item){
                            rows.push('<td>' + item[columns[j].datafield] + '</td>')
                        }
                    };
                    rows.push('</tr>');
                }
                rows.push('</tbody>')
            }
            return rows.join('')
        },
        _tableNoData:function(){
            var opts=this.opts;
            if(!opts.data.length){
                return '<div>'+opts.nodatatext+'</div>'
            }else{
                return ''
            }
        }
        
    }
})(jQuery);